let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  carbrand: String,
});

module.exports = mongoose.model("user", userSchema);
