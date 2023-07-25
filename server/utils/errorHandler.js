class ErrorHandler extends Error {
  // errorHandler class inherits all the properties and functions of built-in Error class
  constructor(message, statusCode) {
    // a constructor of a class is executed when a new instance of the class is created
    super(message);
    // super() is used inside constructor in case of inheritance, here on using it...child class errorHandler inherits the property of parent class Error, i.e. message of Error class is inherited
    this.statusCode = statusCode;
    // statusCode from the parameter is assigned to the property of the current instance

    Error.captureStackTrace(this, this.constructor);
    // The method allows more accurate debugging information by capturing and customizing the stack trace for the error object
    // This method is available for V8 JavaScript engine for browsers
    // 'this' is for current instance, i.e. errorHandler and 'this.constructor' is for constructor function of the error class
  }
}

module.exports = ErrorHandler;
