require("dotenv").config();
const express = require("express");
const PORT = 5000;
const app = express();
const {
  notFoundErrorHandler,
  errorHandler,
} = require("./src/middleware/apiErrorHandler");
const constants = require("./src/constants/index");
const route = require("./src/route/index.route");
const mongoose = require("mongoose");

app.use(express.json());

app.use(constants.url.baseapi, route);

app.use(notFoundErrorHandler);

app.use(errorHandler);

app.listen(PORT, (resp) => {
  console.log("server running");
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to mongodb database");
    });
});
