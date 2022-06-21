import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  getActiveProducts,
  getProductsRange,
} from "../controllers/product.controllers.js";
import { authProduct, authMinMax } from "../middleware/auth.middleware.js";

const productRouter = Router();

productRouter.post("/create", authProduct, createProduct);
productRouter.get("/getAllProducts", getAllProducts);
productRouter.get("/getProduct/:id", getProduct);
productRouter.get("/getActiveProducts", getActiveProducts);
productRouter.get("/getProductsRange", authMinMax, getProductsRange);
// productRouter.put("/update", createProduct);

export { productRouter };
