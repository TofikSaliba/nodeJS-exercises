import { addProduct } from "../services/product.services.js";

export const createProduct = async (req, res) => {
  try {
    const product = req.body;
    const savedProduct = addProduct(product);
    res.send(savedProduct);
  } catch (error) {
    res.send(error.message);
  }
};
