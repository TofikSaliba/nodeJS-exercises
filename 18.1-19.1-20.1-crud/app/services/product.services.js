import { Product } from "../models/product/product.model.js";

export const addProduct = async (product) => {
  const newProduct = new Product(product);
  // Product.findSomethingNew();
  // newProduct.instanceMethod();
  return newProduct.save();
};

export const getProducts = async () => {
  return Product.find({});
};

export const getSpecificProduct = async (id) => {
  return Product.findById(id);
};

export const getIsActiveProducts = async () => {
  return Product.find({ isActive: true });
};

export const getRangeProducts = async (body) => {
  return Product.find({
    $and: [
      { "details.price": { $gte: body.min } },
      { "details.price": { $lte: body.max } },
    ],
  });
};

export const update = async (id, { isActive, details }) => {
  return Product.findByIdAndUpdate(
    id,
    { isActive: isActive, "details.discount": details.discount },
    { new: true }
  );
};

export const deleteSpecificProduct = async (id) => {
  return Product.findByIdAndDelete({ _id: id });
};

export const deleteAll = async () => {
  return Product.deleteMany({});
};
