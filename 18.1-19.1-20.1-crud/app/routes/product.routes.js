import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  getActiveProducts,
  getProductsRange,
  deleteAllProducts,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controllers.js";
import {
  authProduct,
  authMinMax,
  authUpdate,
} from "../middleware/auth.middleware.js";

const productRouter = Router();

productRouter.post("/create", authProduct, createProduct);
productRouter.get("/getAllProducts", getAllProducts);
productRouter.get("/getProduct/:id", getProduct);
productRouter.get("/getActiveProducts", getActiveProducts);
productRouter.get("/getProductsRange", authMinMax, getProductsRange);
productRouter.put("/updateProduct/:id", authUpdate, updateProduct);
productRouter.delete("/deleteProduct/:id", deleteProduct);
productRouter.delete("/deleteAllProducts", deleteAllProducts);

export { productRouter };
