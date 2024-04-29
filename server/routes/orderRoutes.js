const {
  makeNewOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const {
  isUserAuthenticated,
  authorizeRoles,
} = require("../middleware/authMiddleware");

const orderRoutes = async (app) => {
  app.post("/api/order/new", isUserAuthenticated, makeNewOrder);
  app.get(
    "/api/order/:id",
    isUserAuthenticated,
    authorizeRoles("Admin"),
    getSingleOrder
  );
  app.get("/api/orders/me", isUserAuthenticated, myOrders);
  app.get(
    "/api/admin/orders",
    isUserAuthenticated,
    authorizeRoles("Admin"),
    getAllOrders
  );
  app.put(
    "/api/admin/order/:id",
    isUserAuthenticated,
    authorizeRoles("Admin"),
    updateOrder
  );
  app.delete(
    "/api/admin/order/:id",
    isUserAuthenticated,
    authorizeRoles("Admin"),
    deleteOrder
  );
};

module.exports = orderRoutes;
