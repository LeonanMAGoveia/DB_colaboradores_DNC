import { hash } from "bcryptjs";
import prismaClient from "../prisma.js";

class CreateClientService {
  //faz a criação do usuário
  async execute({ name, email, password }) {
    if (!email) {
      throw new Error("Email incorreto");
    }

    // faz a procura para ver ser tem email cadastrado no banco de dados
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: { email: email },
    });
    // se já tiver um email cadastrado, retorna o erro
    if (userAlreadyExists) {
      throw new Error("Usuário já cadastrado");
    }
    //criptografa a senha do usuário
    const passwordhash = await hash(password, 8);
    // cria o usuário no banco de dados
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordhash,
        role: "CLIENTE",
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    });

    return user;
  }
}

export { CreateClientService };
