const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const {
  isUserAuthenticated,
  authorizeRoles,
} = require("../middleware/authMiddleware");

const productRoutes = (app) => {
  app.get("/api/products", getAllProducts);
  app.post(
    "/api/product/new",
    isUserAuthenticated,
    authorizeRoles("Admin"),
    createProduct
  );
  app.put(
    "/api/product/:id",
    isUserAuthenticated,
    authorizeRoles("Admin"),
    updateProduct
  );
  app.get("/api/product/:id", getProductDetails);
  app.delete(
    "/api/product/:id",
    isUserAuthenticated,
    authorizeRoles("Admin"),
    deleteProduct
  );
};

module.exports = productRoutes;
