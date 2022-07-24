let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const dataSchema = new Schema({
  label: String,
  value: String,
});

module.exports = mongoose.model("data", dataSchema);
