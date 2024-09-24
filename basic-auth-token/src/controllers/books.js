const Book = require("../models/book");

async function getBooks(req, res, next) {
  const userId = req.user.id;

  try {
    const books = await Book.find({ userId });

    return res.json(books);
  } catch (error) {
    return next(error);
  }
}

module.exports = { getBooks };
