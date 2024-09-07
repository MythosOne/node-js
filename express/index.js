const express = require("express");
const app = express();

app.get("/", (req, res) => {
//   console.log(req.method, req.url);
//   res.send("Hello World");

    res.json([{title: "Hello World"}])
});

app.get("/movies", (req, res) => {
  console.log(req.method, req.url);
  res.send("Movies");
});

app.all("/products", (req, res) => {
    console.log(req.method, req.url);
    res.send("Products");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
