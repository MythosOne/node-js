const express = require("express");

const BookController = require("../controllers/books");

const router = express.Router();

router.get("/", BookController.getBooks);

module.exports = router;
