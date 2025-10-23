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

    // 1. Verifica se o colaborador existe (continua igual)
    const colaborador = await this.colaboradorRepository.findById(id);
    if (!colaborador) {
      throw new AppError("Colaborador não encontrado.", 404);
    }

    // --- NOVA LÓGICA DE FILTRAGEM ---
    // 2. Criamos um objeto de dados limpo.
    //    Isso garante que NENHUM dado indesejado (como email, senha, role, etc.)
    //    seja passado para o banco de dados.
    const dadosFiltrados = {};

    // 3. Verificamos campo por campo quais dados permitidos foram enviados.
    //    Usamos '!== undefined' para permitir a atualização para 'null' ou '""' (ex: limpar o telefone).
    if (dataToUpdate.cargo !== undefined) {
      dadosFiltrados.cargo = dataToUpdate.cargo;
    }

    if (dataToUpdate.endereco !== undefined) {
      dadosFiltrados.endereco = dataToUpdate.endereco;
    }

    if (dataToUpdate.telefone !== undefined) {
      dadosFiltrados.telefone = dataToUpdate.telefone;
    }

    // Esta é a lógica para quando o colaborador não está mais na empresa.
    // Ex: O admin pode enviar { "status": "desligado" }
    if (dataToUpdate.status !== undefined) {
      dadosFiltrados.status = dataToUpdate.status;
    }

    // 4. Manda o repositório atualizar o banco APENAS com os dados filtrados
    const colaboradorAtualizado = await this.colaboradorRepository.update(
      id,
      dadosFiltrados
    );

    return colaboradorAtualizado;
  }
}

export { UpdateColaboradorService };
