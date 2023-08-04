const { makeNewOrder } = require("../controllers/orderController");
const { isUserAuthenticated } = require("../middleware/authMiddleware");

const orderRoutes = async (app) => {
  app.post("/api/order/new", isUserAuthenticated, makeNewOrder);
};

module.exports = orderRoutes;
