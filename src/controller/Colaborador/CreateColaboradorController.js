import { CreateColaboradorService } from "../../service/Colaborador/CreateColaboradorService.js";

class CreateColaboradorController {
  async handle(req, res) {
    const userData = req.body;
    const createColaboradorService = new CreateColaboradorService();
    const user = await createColaboradorService.execute(userData);

    return res.status(201).json(user);
  }
}

export { CreateColaboradorController };
