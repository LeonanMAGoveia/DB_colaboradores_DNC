import { ColaboradorRepository } from "../../repositories/ColaboradorRepository.js";

class ListColaboradorService {
  constructor() {
    this.colaboradorRepository = new ColaboradorRepository();
  }

  async execute() {
    const colaboradores = await this.colaboradorRepository.findAll();
    return colaboradores;
  }
}

export { ListColaboradorService };
