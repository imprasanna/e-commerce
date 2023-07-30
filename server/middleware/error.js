const ErrorMiddleware = (err, req, res, next) => {
  // console.log("Here we are");
  // console.log("Status Code1", err.statusCode);
  console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error!!";
  // console.log("Status Code2", err.statusCode);

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

module.exports = ErrorMiddleware;
