const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const {
  isUserAuthenticated,
  authorizeRoles,
} = require("../middleware/authMiddleware");

const productRoutes = (app) => {
  app.get("/api/products", getAllProducts);
  app.post(
    "/api/admin/product/new",
    isUserAuthenticated,
    authorizeRoles("Admin"),
    createProduct
  );
  app.put(
    "/api/admin/product/:id",
    isUserAuthenticated,
    authorizeRoles("Admin"),
    updateProduct
  );
  app.get("/api/product/:id", getProductDetails);
  app.delete(
    "/api/admin/product/:id",
    isUserAuthenticated,
    authorizeRoles("Admin"),
    deleteProduct
  );
  app.put("/api/review", isUserAuthenticated, createProductReview);
  app.get("/api/reviews", getProductReviews);
  app.delete("/api/reviews", isUserAuthenticated, deleteReview);
};

module.exports = productRoutes;
