import { AuthUserService } from "../service/AuthUserService.js";

class AuthUserController {
  async handle(req, res) {
    const { email, password } = req.body;
    const authUserService = new AuthUserService();

    // CORREÇÃO 2: Adicionado o try...catch
    try {
      const auth = await authUserService.execute({
        email,
        password,
      });
      return res.json(auth);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export { AuthUserController };
