const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  name: { type: String, required: true },

  phone: { type: Number, required: true },

  email: { type: String, required: true },

  password: { type: String, required: true },

  cpassword: { type: String, required: true },
});

const User = new mongoose.model("buyerAuth", buyerSchema);
module.exports = User;
