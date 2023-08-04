const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const { Product } = require("../models/productModel");
const ApiFeatures = require("../utils/apiFeatures");
// const errorHandler = require("../utils/errorHandler");
// const catchAsyncError = require("../middleware/catchAsyncErrors");
// const catchAsyncError = require("express-async-handler");

/* Cast errors for mongoDB handled in getProductDetails, updateProduct and deleteProduct functions */

const createProduct = async (req, res) => {
  try {
    req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    }); // status code 201 -> the request has succeeded and has led to the creation of a resource
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: `Resource not found! Invalid ${error.path}: ${error.value}`,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
};

const getAllProducts = async (req, res) => {
  try {
    const resultPerPage = 5;
    const productCount = Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
      .search()
      .filter()
      .pagination(resultPerPage);
    // const product = await Product.find();
    const product = await apiFeature.query;

    if (!product) {
      return res
        .status(500)
        .json({ success: false, message: "Product not found" });
      // return next(new errorHandler("Product not found!!", 404));
    }

    res.status(200).json({
      success: true,
      product,
      productCount,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: `Resource not found! Invalid ${error.path}: ${error.value}`,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
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
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: `Resource not found! Invalid ${error.path}: ${error.value}`,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
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

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: `Resource not found! Invalid ${error.path}: ${error.value}`,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
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
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: `Resource not found! Invalid ${error.path}: ${error.value}`,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
};

// for review and update of products
const createProductReview = async (req, res) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user.id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user.id.toString()
  ); // You can use forEach loop instead of find

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user.id.toString()) {
        rev.rating = rating;
        rev.comment = comment;
      }
    });
  } else {
    product.reviews.push(review);
    product.reviewNumber = product.reviews.length;
  }

  let avg = 0;
  product.reviews.forEach((rev) => (avg += rev.rating));
  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
};

const getProductReviews = async (req, res) => {
  try {
    const product = await Product.findById(req.query.productId);

    // console.log("PRODUCT", product);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      reviews: product.reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const product = await Product.findById(req.query.productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    const reviews = product.reviews.filter(
      (rev) => rev._id.toString() !== req.query.id
    );

    let avg = 0;

    reviews.forEach((rev) => (avg += rev.rating));

    const ratings = avg / reviews.length;

    const reviewNumber = reviews.length;

    await Product.findByIdAndUpdate(
      req.query.productId,
      {
        reviews,
        ratings,
        reviewNumber,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
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
  createProductReview,
  getProductReviews,
  deleteReview,
};
