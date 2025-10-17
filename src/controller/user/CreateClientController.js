import { CreateClientService } from "../../service/user/CreateClientService.js";

class CreateClientController {
  async handle(req, res) {
    const { name, email, password } = req.body;

    const createClientService = new CreateClientService();

    const user = await createClientService.execute({
      name,
      email,
      password,
    });

    return res.json(user);
  }
}

export { CreateClientController };
