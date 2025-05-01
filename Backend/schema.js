const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

const UserModel = mongoose.model("product", productSchema); // Use correct collection name

module.exports = UserModel;
