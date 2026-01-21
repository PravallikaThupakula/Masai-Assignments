const express = require("express");
const fs = require("fs");
const router = express.Router();

const readDB = () => JSON.parse(fs.readFileSync("db.json"));
const writeDB = (data) => fs.writeFileSync("db.json", JSON.stringify(data, null, 2));

router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.products);
});

module.exports = router;
