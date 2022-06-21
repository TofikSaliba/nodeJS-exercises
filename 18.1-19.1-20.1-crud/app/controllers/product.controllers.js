import {
  addProduct,
  getProducts,
  getSpecificProduct,
  getIsActiveProducts,
  getRangeProducts,
} from "../services/product.services.js";

export const createProduct = async (req, res) => {
  try {
    const product = req.body;
    const savedProduct = await addProduct(product);
    res.status(201).send(savedProduct);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const fetchedProducts = await getProducts();
    res.send(fetchedProducts);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const fetchedProduct = await getSpecificProduct(req.params.id);
    if (!fetchedProduct) {
      return res.status(404).send({ error: "Product does not exist!" });
    }
    res.send(fetchedProduct);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const getActiveProducts = async (req, res) => {
  try {
    const fetchedProducts = await getIsActiveProducts();
    if (!fetchedProducts.length) {
      return res.status(404).send({ error: "No active products were found!" });
    }
    res.send(fetchedProducts);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const getProductsRange = async (req, res) => {
  try {
    const fetchedProducts = await getRangeProducts(req.body);
    if (!fetchedProducts.length) {
      return res
        .status(404)
        .send({ error: "No products in the range were found!" });
    }
    res.send(fetchedProducts);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
