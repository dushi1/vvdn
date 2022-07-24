const express = require("express");
const router = express.Router();
const getDataController = require("../controller/getData.controller");

router.get("/get-data", getDataController);

module.exports = router;
