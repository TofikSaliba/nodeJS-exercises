import { Router } from "express";
import { createProduct } from "../controllers/product.controllers.js";
import { authProduct } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.post("/create", authProduct, createProduct);
// userRouter.post(
//   '/update',
//   (req, res, next) => {
//     // manipulate the reqs
//     // next()
//   },
//   (req, res) => {
//     // send...
//   }
// );

export { userRouter };
