import mongoose from "mongoose";
import { productSchema } from "./product.schema.js";

productSchema.statics.findSomethingNew = function () {
  console.log({ findSomethingNewThisFunc: this });
};

productSchema.methods.instanceMethod = function () {
  console.log({ InstanceMethodsThis: this });
};

const Product = mongoose.model("Product", productSchema);

export { Product };
