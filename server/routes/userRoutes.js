const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");

const userRoutes = (app) => {
  app.post("/api/register", registerUser);
  app.post("/api/login", loginUser);
  app.get("/api/logout", logoutUser);
  app.post("/api/password/forgot", forgotPassword);
  app.put("/api/password/reset/:token", resetPassword);
};

module.exports = userRoutes;
