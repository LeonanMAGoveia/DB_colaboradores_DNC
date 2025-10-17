import prismaClient from "../prisma.js";

class UserRepository {
  async findByEmail(email) {
    return await prismaClient.user.findUnique({ where: { email } });
  }

  async create(userData) {
    return await prismaClient.user.create({
      data: userData,
      select: { id: true, email: true, name: true, role: true },
    });
  }
}

export { UserRepository };
