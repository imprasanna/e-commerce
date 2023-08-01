const { registerUser, loginUser } = require("../controllers/userController");

const userRoutes = (app) => {
  app.post("/api/register", registerUser);
  app.post("/api/login", loginUser);
};

module.exports = userRoutes;
