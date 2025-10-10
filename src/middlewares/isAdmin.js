import prismaClient from "../prisma.js";

export async function isAdmin(req, res, next) {
  const user_id = req.user_id;

  const user = await prismaClient.user.findUnique({
    where: { id: user_id },
  });

  if (user?.role === "ADMIN") {
    return next();
  }

  res
    .status(403)
    .json({ error: "Acesso negado. Rota exclusiva para administradores" });
}
