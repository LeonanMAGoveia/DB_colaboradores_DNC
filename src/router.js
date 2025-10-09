import { Router } from "express";

import { CreateClientController } from "./controller/CreateClientController.js";

const router = Router();

router.post("/user", new CreateClientController().handle);

export default router; // Não se esqueça de exportar o router!
