const express = require("express");
const app = express();
const port = 3000;
const animals = require("./db");

app.get("/", (req, res) => {
  res.json({
    title: "Animals list",
    version: "0.1",
  });
});

app.get("/animals", (req, res) => res.json(animals));

app.get("/animals/cats", (req, res) =>
  res.json(animals.filter((animal) => animal.type == "cat"))
);
app.get("/animals/dogs", (req, res) =>
  res.json(animals.filter((animal) => animal.type == "dog"))
);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
