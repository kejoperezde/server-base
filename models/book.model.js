const mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  isbn: { type: String },
  price: { type: Number },
  stock: { type: Number },
  image: { type: String },
});

module.exports = mongoose.model("Book", bookSchema, "books");
