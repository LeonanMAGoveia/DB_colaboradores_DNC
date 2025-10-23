import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "./router.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Servidor Online ${PORT}`));
