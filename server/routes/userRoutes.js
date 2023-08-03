const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
} = require("../controllers/userController");

const userRoutes = (app) => {
  app.post("/api/register", registerUser);
  app.post("/api/login", loginUser);
  app.post("/api/password/forgot", forgotPassword);
  app.get("/api/logout", logoutUser);
};

module.exports = userRoutes;
