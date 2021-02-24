const express = require("express");
const Book = require("../models/bookModel.js");

const router = express.Router();

// TODO: add query string to perform filtering, e.g. published=2010
router.route("/books").get((req, res) => {
  Book.find({}, (err, books) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log(books.length);
    return res.json(books);
  });
});

// TODO: Get book by _id
router.route("/books/:id").get((req, resp) => {
  let id = req.params.id;
  try {
    Book.findById(id, (err, book) => {
      if (err) {
        return resp.status(500).send(err.message);
      }
      if (book) {
        console.log(book);
        return resp.json(book);
      } else {
        return resp.status(404).send({ msg: `Book not found. id=${id}` });
      }
    });
  } catch (err) {
    return resp.status(500).send(err.message);
  }
});

// TODO: Save a book into MongoDB
router.route("/books").post((req, resp) => {
  let book = new Book(req.body);
  console.log(book);
  book.save((err, obj) => {
    if (err) {
      resp.status(500).send(err.message);
    } else {
      resp.json(obj);
    }
  });
});

// TODO: Update an existing book in MongoDB, only update uploaded attributes
// TODO: Save a book into MongoDB
router.route("/books/:id").put((req, resp) => {
  let id = req.params.id;
  console.log(req.body);
  console.log(new Book(req.body));
  Book.findByIdAndUpdate(id, req.body, {new: true}, (err, obj) => {
    if (err) {
      resp.status(500).send(err.message);
    } else {
      resp.json(obj);
    }
  });
});

router.route("/books/add-author/:id").put((req, resp) => {
  let id = req.params.id;
  let author = req.body;
  let book = Book.findById(id);
  book.authors.push(author);
  book.save((err, obj) => {
    if (err){
      resp.status(500).send(err.message);
    }else {
      resp.json(obj);
    }
  })
});

module.exports = router;
