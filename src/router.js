import { Router } from "express";

// controller
import { CreateClientController } from "./controller/CreateClientController.js";
import { AuthUserController } from "./controller/AuthUserController.js";

//CREDENCIAIS DE ADMIN
import { isAuthenticated } from "./middlewares/isAuthenticated.js";
import { isAdmin } from "./middlewares/isAdmin.js";

// Importante criar uma instância do Router
const router = Router();

// Rota para criar um usuário
router.post(
  "/user",
  isAuthenticated,
  isAdmin,
  new CreateClientController().handle
);
router.post("/login", new AuthUserController().handle);

export default router; // Não se esqueça de exportar o router!
