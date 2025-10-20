import { DeleteColaboradorService } from "../../service/Colaborador/DeleteColaboradorService.js";

class DeleteColaboradorController {
  async handle(req, res) {
    const { id } = req.params;
    const deleteColaboradorService = new DeleteColaboradorService();
    await deleteColaboradorService.execute(id);

    return res.status(204).send();
  }
}

export { DeleteColaboradorController };
