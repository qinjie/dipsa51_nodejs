const express = require("express");
const Book = require('../models/bookModel.js');

const router = express.Router();

// /books/
router.route("/books").get((req, res) => {
  Book.find((err, books) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log(books.length);
    return res.json(books);
  });
});

module.exports = router;
