import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "./router.js";
import { errorHandler } from "./middlewares/errorHandler.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor Online ${PORT}`));
