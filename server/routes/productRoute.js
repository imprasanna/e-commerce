const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const isUserAuthenticated = require("../middleware/authMiddleware");

const productRoutes = (app) => {
  app.get("/api/products", isUserAuthenticated, getAllProducts);
  app.post("/api/product/new", createProduct);
  app.put("/api/product/:id", updateProduct);
  app.get("/api/product/:id", getProductDetails);
  app.delete("/api/product/:id", deleteProduct);
};

module.exports = productRoutes;
