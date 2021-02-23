const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: { type: String },
  authors: [{ type: String }],
  tags: [{ type: String }],
  pages: { type: Number },
  published: { type: Number },
});

let bookModel = mongoose.model("Book", bookSchema, "books");

module.exports = bookModel;

