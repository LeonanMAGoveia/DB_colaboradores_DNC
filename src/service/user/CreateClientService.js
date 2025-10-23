// src/service/user/AuthUserService.js
import prismaClient from "../../prisma.js";
import { compare } from "bcryptjs";
import pkg from "jsonwebtoken";
import { AppError } from "../../middlewares/errorHandler.js";

const { sign } = pkg;

class AuthUserService {
  async execute({ email, password }) {
    let user = await prismaClient.colaborador.findUnique({
      where: { email: email },
    });

    if (!user) {
      user = await prismaClient.user.findUnique({
        where: { email: email },
      });
    }

    if (!user) {
      throw new AppError("Usuário ou senha incorreto", 401);
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError("Usuário ou senha incorreto", 401);
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new AppError(
        "Erro interno do servidor: Chave JWT não configurada",
        500
      );
    }

    const token = sign(
      { name: user.name, email: user.email, role: user.role },
      secret,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: token,
    };
  }
}

export { AuthUserService };
