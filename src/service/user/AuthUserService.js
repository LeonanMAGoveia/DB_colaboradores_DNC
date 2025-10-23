import pkg from "jsonwebtoken";
import { AppError } from "./errorHandler.js";

const { verify } = pkg;

export function isAuthenticated(req, res, next) {
  const authToken = req.headers.authorization || req.headers.Authorization;

  if (!authToken) {
    throw new AppError("Token não fornecido.", 401);
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET);
    req.user_id = sub;
    return next();
  } catch (error) {
    throw new AppError("Token inválido.", 401);
  }
}
