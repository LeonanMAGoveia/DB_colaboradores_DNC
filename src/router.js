import { Router } from "express";

// USUÁRIO
import { CreateClientController } from "./controller/user/CreateClientController.js";

// COLABORADORES
import { CreateColaboradorController } from "./controller/Colaborador/CreateColaboradorController.js";
import { DeleteColaboradorController } from "./controller/Colaborador/DeleteColaboradorController.js";
import { ListColaboradorController } from "./controller/Colaborador/ListColaboradorController.js";
import { UpdateColaboradorController } from "./controller/Colaborador/UpdateColaboradorController.js";

//LOGIN
import { AuthUserController } from "./controller/user/AuthUserController.js";

//CREDENCIAIS DE ADMIN
import { isAuthenticated } from "./middlewares/isAuthenticated.js";
import { isAdmin } from "./middlewares/isAdmin.js";

// Importante criar uma instância do Router
const router = Router();

//LOGIN
router.post("/clientes", new CreateClientController().handle);

router.post("/login", new AuthUserController().handle);

// Rota de colaborador, apenas o admin pode fazer isso, pois esta com proteção.
router.post(
  "/colaboradores",
  isAuthenticated,
  isAdmin,
  new CreateColaboradorController().handle
);
router.delete(
  "/colaboradores/:id",
  isAuthenticated,
  isAdmin,
  new DeleteColaboradorController().handle
);
router.get(
  "/colaboradores",
  isAuthenticated,
  isAdmin,
  new ListColaboradorController().handle
);

router.patch(
  "/colaboradores/:id",
  isAuthenticated,
  isAdmin,
  new UpdateColaboradorController().handle
);

export default router;
