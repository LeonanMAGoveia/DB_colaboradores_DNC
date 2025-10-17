// src/service/Colaborador/CreateColaboradorService.js

import { hash } from "bcryptjs";
import { AppError } from "../../middlewares/errorHandler.js";
import { ColaboradorRepository } from "../../repositories/ColaboradorRepository.js";

class CreateColaboradorService {
  constructor() {
    this.colaboradorRepository = new ColaboradorRepository();
  }

  async execute(userData) {
    // fazer o cadastro do colaborador
    const { name, cpf, email, password, role, avatar, ...optionalData } =
      userData;

    if (!name || !cpf || !email || !password) {
      throw new AppError("Nome, CPF, Email e Senha são obrigatórios.", 400);
    }

    // A role de um colaborador nunca pode ser 'CLIENTE'.
    if (role === "CLIENTE") {
      throw new AppError(
        "A role 'CLIENTE' não é permitida para colaboradores.",
        400
      );
    }

    // Antes de criar ele vai verificar se tem email ou cpf já cadastrado para não haver duplicidade.
    const emailExists = await this.colaboradorRepository.findByEmail(email);
    if (emailExists) {
      throw new AppError("Este email já está cadastrado.", 409);
    }

    const cpfExists = await this.colaboradorRepository.findByCpf(cpf);
    if (cpfExists) {
      throw new AppError("Este CPF já está cadastrado.", 409);
    }

    // Lógica para Criptografia da Senha, pois assim fica mais dificil de hackear
    const passwordHash = await hash(password, 8);

    const colaborador = await this.colaboradorRepository.create({
      name,
      cpf,
      email,
      password: passwordHash,
      avatar,
      role: role === "ADMIN" ? "ADMIN" : "COLABORADOR",
      ...optionalData,
      dataAdmissao: optionalData.dataAdmissao
        ? new Date(optionalData.dataAdmissao)
        : null,
    });

    return colaborador;
  }
}

export { CreateColaboradorService };
