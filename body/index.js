const express = require("express");

const app = express();

app.use(express.json());
const jsonParser = express.json();

app.post("/products", jsonParser, (req, res) => {
  const newProduct = req.body;
  console.log({ newProduct });

  res.send();
});

app.post("/customers", (req, res) => {
    const newCustomers = req.body;
    console.log({ newCustomers });
  
    res.send();
  });

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
