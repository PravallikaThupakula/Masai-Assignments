const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Correct db.json path
const dbPath = path.join(__dirname, "..", "db.json");

// Safe DB read
function readDB() {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
}

// Safe DB write
function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

// ➕ Create User
router.post("/add", (req, res) => {
  const db = readDB();

  const newUser = {
    id: Date.now(),
    ...req.body
  };

  db.users.push(newUser);
  writeDB(db);

  res.status(201).json(newUser);
});

// 📄 Get All Users
router.get("/", (req, res) => {
  const db = readDB();
  res.status(200).json(db.users);
});

// 🔍 Get Single User
router.get("/:userId", (req, res) => {
  const db = readDB();
  const user = db.users.find(
    u => u.id === Number(req.params.userId)
  );

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

// ✏️ Update User
router.put("/update/:userId", (req, res) => {
  const db = readDB();
  const index = db.users.findIndex(
    u => u.id === Number(req.params.userId)
  );

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  db.users[index] = {
    ...db.users[index],
    ...req.body
  };

  writeDB(db);
  res.status(200).json(db.users[index]);
});

// ❌ Delete User
router.delete("/delete/:userId", (req, res) => {
  const db = readDB();
  const index = db.users.findIndex(
    u => u.id === Number(req.params.userId)
  );

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = db.users.splice(index, 1);
  writeDB(db);

  res.status(200).json(deletedUser[0]);
});

module.exports = router;
