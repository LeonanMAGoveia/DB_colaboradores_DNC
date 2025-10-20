import { ColaboradorRepository } from "../../repositories/ColaboradorRepository.js";
import { AppError } from "../../middlewares/errorHandler.js";

class DeleteColaboradorService {
  constructor() {
    this.colaboradorRepository = new ColaboradorRepository();
  }

  async execute(colaborador_id) {
    if (!colaborador_id) {
      throw new AppError("ID do profissional é obrigatório");
    }

    const colaborador = await this.colaboradorRepository.findById(
      colaborador_id
    );

    if (!colaborador) {
      throw new AppError("Profissional não encontrado.");
    }

    await this.colaboradorRepository.deleteById(colaborador_id);

    return;
  }
}

export { DeleteColaboradorService };
