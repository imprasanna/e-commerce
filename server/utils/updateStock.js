const { Product } = require("../models/productModel");

const updateStock = async (id, quantity) => {
  const product = await Product.findById(id);

  product.stock -= quantity;

  // console.log("STOCK", product.stock);

  await product.save({ validateBeforeSave: false });
};

module.exports = updateStock;
