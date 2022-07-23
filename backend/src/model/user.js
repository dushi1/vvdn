//mongoose user model
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  gender: String,
  email: String,
  mobile: String,
  address: String,
  profession: String,
  comapny: String,
  interest: String,
});

export const userModel = mongoose.model("user", userSchema);
