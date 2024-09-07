const books = require("./books");

async function invokeAction({ action, id, title, author }) {
  switch (action) {
    case "getAllBooks":
      const allBooks = await books.getAll();
      console.table(allBooks);
      break;
    case "getById":
      const book = await books.getById(id);
      console.log(book);
      break;
    case "addBook":
      const newBook = await books.addBook({ title, author });
      console.log(newBook);
      break;
    case "removeBook":
      const removeBook = await books.removeBook(id);
      console.log(removeBook);
      break;
    default:
      console.log("Unknown action: ", action);
  }
}

invokeAction({action: "getAllBooks"})


