const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const { Product } = require("../models/productModel");
// const errorHandler = require("../utils/errorHandler");
// const catchAsyncError = require("../middleware/catchAsyncErrors");
// const catchAsyncError = require("express-async-handler");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    }); // status code 201 -> the request has succeeded and has led to the creation of a resource
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// Update products for admin
const updateProduct = async (req, res) => {
  try {
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

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const getProductDetails = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(500)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
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
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
};
