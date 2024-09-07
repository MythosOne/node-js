const books = require("./books");
const { program } = require('commander');

async function invokeAction({ action, id, title, author }) {
  switch (action) {
    case "list":
      const allBooks = await books.getAll();
      console.table(allBooks);
      break;
    case "get":
      const book = await books.getById(id);
      console.table(book);
      break;
    case "add":
      const newBook = await books.addBook({ title, author });
      console.table(newBook);
      break;
    case "remove":
      const removeBook = await books.removeBook(id);
      console.table(removeBook);
      break;
    default:
      console.log("Unknown action: ", action);
  }
}

program
    .option("-a, --action <action>", "Action to perform")
    .option("-i, --id <id>", "Book id")
    .option("-t, --title <title>", "Book title")
    .option("-at, --author <author>", "Book author")

program.parse(process.argv);

const options = program.opts();

invokeAction(options);