const express = require("express");
const app = express();

app.use(express.json());

const products = require("./routes/productRoute");

app.use("/api/v1",products);

const errorMiddleware = require("./middleware/error");
app.use(errorMiddleware);

module.exports = app;