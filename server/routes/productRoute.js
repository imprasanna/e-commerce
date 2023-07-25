const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");

const productRoute = (app) => {
  app.get("/api/products", getAllProducts);
  app.post("/api/product/new", createProduct);
  app.put("/api/product/:id", updateProduct);
  app.get("/api/product/:id", getProductDetails);
  app.delete("/api/product/:id", deleteProduct);
};

module.exports = { productRoute };
