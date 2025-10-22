import { UpdateColaboradorService } from "../../service/Colaborador/UpdateColaboradorService.js";

class UpdateColaboradorController {
  async handle(req, res) {
    const { id } = req.params;

    const dataToUpdate = req.body;

    const updateColaboradorService = new UpdateColaboradorService();

    const colaborador = await updateColaboradorService.execute(
      id,
      dataToUpdate
    );

    return res.status(200).json(colaborador);
  }
}

export { UpdateColaboradorController };
