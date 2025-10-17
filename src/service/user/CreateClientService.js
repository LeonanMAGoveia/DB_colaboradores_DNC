import { hash } from "bcryptjs";
import { AppError } from "../../middlewares/errorHandler.js";
import { UserRepository } from "../../repositories/UserRepository.js";
class CreateClientService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userData) {
    const { name, email, password } = userData;
    if (!name || !email || !password) {
      throw new AppError("Nome, email e senha são obrigatórios.", 400);
    }

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("Este email já está cadastrado.", 409);
    }

    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      role: "CLIENTE",
    });

    return user;
  }
}

export { CreateClientService };
