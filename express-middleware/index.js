const fs = require("fs/promises");
const express = require("express");
const app = express();
const morgan = require("morgan");

function checkApiKey(req, res, next) {
  const { apiKey } = req.query;

  if (apiKey === "12345") {
    return next();
  }

  return res.status(401).json({ error: "Unauthorized" });
}

app.use(checkApiKey);
app.use(morgan("dev"));

app.get("/", async (req, res) => {
  try {
    const data = await fs.readFile("data.json", "utf8");

    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
