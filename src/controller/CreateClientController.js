import { CreateClientService } from "../service/CreateClientService.js";

class CreateClientController {
  async handle(req, res) {
    const userData = req.body;
    const createClienteService = new CreateClientService();
    const user = await createClienteService.execute(userData);

    return res.status(201).json(user);
  }
}

export { CreateClientController };
