const SubmitRouteController = require("../controller/submitForm.controller");
const express = require("express");
const router = express.Router();

router.post("/form-submit", SubmitRouteController);

module.exports = router;
