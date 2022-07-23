require("dotenv").config();
import express from "express";
const PORT = process.env.PORT || 5000;
const app = express();
import {
  notFoundErrorHandler,
  errorHandler,
} from "./src/middleware/apiErrorHandler";
import constants from "./src/constants/index";

app.use(constants.url.baseapi);

app.use(notFoundErrorHandler);

app.use(errorHandler);

app.listen(() => {
  console.log("Server is running");
}, PORT);
