import { AppError } from "../../middlewares/errorHandler.js";
import { ColaboradorRepository } from "../../repositories/ColaboradorRepository.js";

class UpdateColaboradorService {
  constructor() {
    this.colaboradorRepository = new ColaboradorRepository();
  }

  async execute(id, dataToUpdate) {
    if (!id) {
      throw new AppError("ID do colaborador é obrigatório.", 400);
    }

    const colaborador = await this.colaboradorRepository.findById(id);
    if (!colaborador) {
      throw new AppError("Colaborador não encontrado.", 404);
    }

    const dadosFiltrados = {};

    if (dataToUpdate.cargo !== undefined) {
      dadosFiltrados.cargo = dataToUpdate.cargo;
    }

    if (dataToUpdate.endereco !== undefined) {
      dadosFiltrados.endereco = dataToUpdate.endereco;
    }

    if (dataToUpdate.telefone !== undefined) {
      dadosFiltrados.telefone = dataToUpdate.telefone;
    }

    if (dataToUpdate.status !== undefined) {
      dadosFiltrados.status = dataToUpdate.status;
    }

    const colaboradorAtualizado = await this.colaboradorRepository.update(
      id,
      dadosFiltrados
    );

    return colaboradorAtualizado;
  }
}

export { UpdateColaboradorService };
