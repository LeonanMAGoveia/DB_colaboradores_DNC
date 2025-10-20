// src/controller/Colaborador/ListColaboradorController.js
import { ListColaboradorService } from "../../service/Colaborador/ListColaboradorService.js";

class ListColaboradorController {
  async handle(req, res) {
    const listColaboradorService = new ListColaboradorService();

    const colaboradores = await listColaboradorService.execute();

    return res.status(200).json(colaboradores);
  }
}

export { ListColaboradorController };
