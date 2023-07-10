const {
  getAllProducts,
  createProduct,
} = require("../controllers/productController");

const productRoute = (app) => {
  app.get("/api/products", getAllProducts);
  app.post("/api/product/new", createProduct);
};

module.exports = { productRoute };
