const Product = require("../models/productModel");

const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product }); // status code 201 -> the request has succeeded and has led to the creation of a resource
  } catch (error) {
    console.error(error);

    // Check if the error is a Mongoose validation error
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (validationError) => validationError.message
      );
      res.status(400).json({ error: "Validation failed", validationErrors });
    } else {
      res.status(500).json({ error: "Product creation failed" });
    }
  }
};

const getAllProducts = (req, res) => {
  res.status(200).json({ message: "Route is working well" });
};

module.exports = { getAllProducts, createProduct };
