const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  changePassword,
  updateProfile,
} = require("../controllers/userController");
const { isUserAuthenticated } = require("../middleware/authMiddleware");

const userRoutes = (app) => {
  app.post("/api/register", registerUser);
  app.post("/api/login", loginUser);
  app.get("/api/logout", logoutUser);
  app.post("/api/password/forgot", forgotPassword);
  app.put("/api/password/reset/:token", resetPassword);
  app.get("/api/profile", isUserAuthenticated, getUserDetails);
  app.put("/api/password/change", isUserAuthenticated, changePassword);
  app.put("/api/profile/update", isUserAuthenticated, updateProfile);
};

module.exports = userRoutes;
