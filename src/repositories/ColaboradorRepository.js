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

  //DELETE
  //aqui ele vai procurar o coloborador pelo seu id
  async findById(id) {
    return await prismaClient.colaborador.findUnique({
      where: { id: id },
    });
  }

  async deleteById(id) {
    return await prismaClient.colaborador.delete({
      where: { id: id },
    });
  }
}

export { ColaboradorRepository };
