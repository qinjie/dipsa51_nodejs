const mongoose = require("mongoose");

const { Schema } = mongoose;

const authorsSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
});

const bookSchema = new Schema({
  title: { type: String },
  authors: [authorsSchema],
  tags: [{ type: String }],
  pages: { type: Number },
  published: { type: Number },
});

let bookModel = mongoose.model("Book", bookSchema, "books");

module.exports = bookModel;
