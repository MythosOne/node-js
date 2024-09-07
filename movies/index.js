const fs = require("fs").promises;
const path = require("path");

async function readMovies() {
  const filePath = path.join(__dirname, "movies.txt");
  console.log(filePath)
  console.log(path.basename(filePath))
  console.log(path.extname(filePath))

  const data = await fs.readFile(filePath, "utf8");

  return data;
}

module.exports = { readMovies };
