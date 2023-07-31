const asyncErrorHandler = (asyncFunction) => {
  return async (req, res, next) => {
    try {
      await asyncFunction(req, res, next);
    } catch (error) {
      next(error); // Forward the error to the Express error handler
    }
  };
};

module.exports = asyncErrorHandler;
