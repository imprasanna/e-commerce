const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { productRoute } = require("./routes/productRoute");
const dbConnection = require("./config/database");
// const catchAsyncError = require("./middleware/catchAsyncErrors");
// const asyncHandler = require("express-async-handler");
// const errorMiddleware = require("./middleware/error");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
// app.use(errorMiddleware);
// app.use(asyncHandler);

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection!");

  process.exit(1);
});

dotenv.config({ path: "server/config/config.env" });

dbConnection();

productRoute(app);

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection!");

  server.close(() => process.exit(1));
});
