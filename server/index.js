const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { productRoute } = require("./routes/productRoute");
const dbConnection = require("./config/database");
const errorMiddleware = require("./middleware/error");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
app.use(errorMiddleware);

dotenv.config({ path: "server/config/config.env" });

dbConnection();

productRoute(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
