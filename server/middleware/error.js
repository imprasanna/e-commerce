const errorHandler = require("../utils/errorHandler");

const Err = (err, req, res, next) => {
  console.log("Status Code1", err.statusCode);
  err.statusCode = errorHandler.err.statusCode || 500;
  err.message = errorHandler.err.message || "Internal Server Error!!";
  console.log("Status Code2", err.statusCode);

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

module.exports = Err;
