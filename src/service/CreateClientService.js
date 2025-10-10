import { hash } from "bcryptjs";
import prismaClient from "../prisma.js";

class CreateClientService {
  //faz a criação do usuário
  async execute(userData) {
    const { name, cpf, email, password, role, ...optionalData } = userData;
    if (!email || !cpf || !name || !password) {
      throw new Error("Name, CPF, Email e Senha são obrigatórios");
    }

    // faz a procura para ver ser tem email cadastrado no banco de dados
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        OR: [{ email: email }, { cpf: cpf }],
      },
    });

    // se já tiver um email cadastrado, retorna o erro
    if (userAlreadyExists) {
      // Se existe, agora sim podemos verificar o motivo
      if (userAlreadyExists.email === email) {
        throw new Error("Email já está cadastrado");
      }
      if (userAlreadyExists.cpf === cpf) {
        throw new Error("CPF já está cadastrado");
      }
    }

    //criptografa a senha do usuário
    const passwordhash = await hash(password, 8);

    // cria o usuário no banco de dados
    const user = await prismaClient.user.create({
      data: {
        name,
        cpf,
        email,
        password: passwordhash,
        role,
        telefone: optionalData.telefone,
        cargo: optionalData.cargo,
        departamento: optionalData.departamento,
        dataAdmissao: optionalData.dataAdmissao
          ? new Date(optionalData.dataAdmissao)
          : null,
        salario: optionalData.salario,
        status: optionalData.status,
        endereco: optionalData.endereco,
        cidade: optionalData.cidade,
        estado: optionalData.estado,
        cep: optionalData.cep,
      },
      select: {
        id: true,
        email: true,
        name: true,
        cpf: true,
        role: true,
      },
    });

    return user;
  }
}

export { CreateClientService };
