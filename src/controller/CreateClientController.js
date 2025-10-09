import { CreateClientService } from "../service/CreateClientService.js";

// Importante colocar o caminho correto do serviço
class CreateClientController {
  async handle(req, res) {
    const { name, email, password } = req.body;

    // Instanciando a classe que foi importada corretamente
    const createClienteService = new CreateClientService();

    // Tratamento de erros com try catch
    try {
      // Executando o método execute da classe CreateClientService
      const user = await createClienteService.execute({
        name,
        email,
        password,
      });
      return res.status(201).json(user);
    } catch (error) {
      // Retorna o erro com status 400
      return res.status(400).json({ error: "Email já cadastrado" });
    }
  }
}

export { CreateClientController };
