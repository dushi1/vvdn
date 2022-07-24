const express = require("express");
const router = express.Router();
const dataRoute = require("./getData.route");
const submitRoute = require("./submitForm.route");

router.use("/data", dataRoute);
router.use("/submit", submitRoute);

module.exports = router;
