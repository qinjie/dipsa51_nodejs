const express = require("express");
const Book = require('../models/bookModel.js');

const router = express.Router();

// TODO: add query string to perform filtering, e.g. published=2010
router.route("/books").get((req, res) => {
  Book.find((err, books) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log(books.length);
    return res.json(books);
  });
});

// TODO: Get book by _id


// TODO: Save a book into MongoDB 


// TODO: Update an existing book in MongoDB, only update uploaded attributes


module.exports = router;
