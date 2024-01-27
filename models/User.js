const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  login: String,
  email: String,
  password: String,
  registrationDate: Date,
  admin: { type: Boolean, default: false },
});

module.exports = model("User", userSchema);
