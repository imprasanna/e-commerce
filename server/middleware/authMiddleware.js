const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isUserAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login to access this resource",
      });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // console.log("DECODED DATA", decodedData);
    // console.log("DECODED DATA.ID", decodedData._id);

    req.user = await User.findById(decodedData._id);
    next();

    // console.log("REQ.USER", req.user);
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token!" });
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res
        .status(403)
        .json({ message: `${req.user.role} cannot access this file` });
      // status code 403 means forbidden (cannot be authorized though server gets the request)
    }
    next();
  };
};

module.exports = { isUserAuthenticated, authorizeRoles };
