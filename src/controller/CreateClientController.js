import { CreateClientService } from "../service/CreateClientService.js";

class CreateClientController {
  async handle(req, res) {
    const userData = req.body;

    // Corrigido o nome da classe instanciada
    const createClienteService = new CreateClientService();

    try {
      const user = await createClienteService.execute(userData);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateClientController };
