const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");

const userRoutes = (app) => {
  app.post("/api/register", registerUser);
  app.post("/api/login", loginUser);
  app.get("/api/logout", logoutUser);
};

module.exports = userRoutes;
