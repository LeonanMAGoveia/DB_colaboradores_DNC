import { Router } from "express";

const router = Router();

// Rota de teste
router.get("/", (request, response) => {
  response.json({ message: "Servidor funcionando e rota principal OK!" });
});

export default router; // Não se esqueça de exportar o router!
