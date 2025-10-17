// src/repositories/ColaboradorRepository.js
import prismaClient from "../prisma.js";

class ColaboradorRepository {
  async findByEmail(email) {
    return await prismaClient.colaborador.findUnique({
      where: { email },
    });
  }

  async findByCpf(cpf) {
    return await prismaClient.colaborador.findUnique({
      where: { cpf },
    });
  }

  async create(data) {
    return await prismaClient.colaborador.create({
      data,
      select: {
        id: true,
        email: true,
        name: true,
        cpf: true,
        role: true,
      },
    });
  }
}

// A MUDANÇA ESTÁ AQUI: Usamos "export { ... }" para exportar a classe com seu nome.
export { ColaboradorRepository };
