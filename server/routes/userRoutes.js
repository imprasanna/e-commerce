const { registerUser } = require("../controllers/userController");

const userRoutes = (app) => {
  app.post("/api/register", registerUser);
};

module.exports = userRoutes;
