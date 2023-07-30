const e = require("express");
const { Product } = require("../models/productModel");
// const errorHandler = require("../utils/errorHandler");

const createProduct = async (req, res, next) => {
  // try {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  }); // status code 201 -> the request has succeeded and has led to the creation of a resource
  // } catch (error) {
  //   console.error(error);

  //   // Check if the error is a Mongoose validation error
  //   if (error.name === "ValidationError") {
  //     const validationErrors = Object.values(error.errors).map(
  //       (validationError) => validationError.message
  //     );
  //     res.status(400).json({ error: "Validation failed", validationErrors });
  //   } else {
  //     res.status(500).json({ error: "Product creation failed" });
  //   }
  // }
};

const getAllProducts = async (req, res) => {
  const product = await Product.find();

  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "Product not found" });
    // return next(new errorHandler("Product not found!!", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
};

// Update products for admin
const updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "Product not found" });
  }

  // if (!product) {
  //   return next(new errorHandler("Product not found!!", 404));
  // }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  module.exports = { getAllProducts, createProduct, updateProduct };

  res.status(200).json({
    success: true,
    product,
  });
};

const getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "Product not found" });
  }

  // if (!product) {
  //   // console.log("here");
  //   // console.log(new errorHandler("product not found", 300));
  //   // return next("Couldn't found product");

  //   return next(new errorHandler("Product not foundddddd!!", 404));
  // }

  res.status(200).json({ success: true, product });
};

const deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "Product not found" });
  }

  if (!product) {
    return next(new errorHandler("Product not found!!", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
};
