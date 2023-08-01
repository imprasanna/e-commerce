const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isUserAuthenticated = async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Please login to access this resource",
    });
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decodedData._id);
};
