import { Router } from "express";

// controller
import { CreateClientController } from "./controller/CreateClientController.js";

// Importante criar uma instância do Router
const router = Router();

// Rota para criar um usuário
router.post("/user", new CreateClientController().handle);

export default router; // Não se esqueça de exportar o router!
