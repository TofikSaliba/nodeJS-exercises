import express from "express";
import cors from "cors";
import { productRouter } from "./routes/product.routes.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productRouter);

export { app };
