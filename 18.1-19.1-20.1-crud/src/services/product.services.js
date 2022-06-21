import { Product } from "../models/product/product.model.js";

export const addProduct = async (product) => {
  const newProduct = new Product(product);
  // Product.findSomethingNew();
  // newProduct.instanceMethod();
  return await newProduct.save();
};
