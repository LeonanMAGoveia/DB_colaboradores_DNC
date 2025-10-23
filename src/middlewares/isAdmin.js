import prismaClient from "../prisma.js";
import { AppError } from "./errorHandler.js";

export async function isAdmin(req, res, next) {
  const user_id = req.user_id;

  const admin = await prismaClient.colaborador.findUnique({
    where: { id: user_id },
  });

  if (user?.role === "ADMIN") {
    return next();
  }

  // DEPOIS: Lança um erro 403 (Forbidden)
  throw new AppError("Acesso negado. exclusivo para administradores.", 403);
}
