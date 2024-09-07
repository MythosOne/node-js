require("dotenv").config();

const mongoose = require("mongoose");

const url = process.env.DB_URI;

console.log(url);

mongoose
  .connect(url)
  .then(() => console.log("Connect to MongoDB"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
