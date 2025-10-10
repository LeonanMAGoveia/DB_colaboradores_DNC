import prismaClient from "../prisma.js";
import { compare } from "bcryptjs";
import pkg from "jsonwebtoken";

const { sign } = pkg;

class AuthUserService {
  async execute({ email, password }) {
    const user = await prismaClient.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      throw new Error("Usuário ou senha incorreto");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Usuário ou senha incorreto");
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("Erro interno do servidor: Chave JWT não configurada.");
    }

    const token = sign({ name: user.name, email: user.email }, secret, {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  }
}

export { AuthUserService };
