import prismaClient from "../../prisma.js";
import { compare } from "bcryptjs";
import pkg from "jsonwebtoken";
import { AppError } from "../../middlewares/errorHandler.js";

const { sign } = pkg;

class AuthUserService {
  async execute({ email, password }) {
    const user = await prismaClient.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      throw new AppError("Usuário ou senha incorreto");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Usuário ou senha incorreto");
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new AppError("Erro interno do servidor");
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
