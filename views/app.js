console.log("Web serverni boshlash");
const express = require("express");
const app = express();

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDB chaqirish
// const db = require("../server").db();

const { getDb } = require("../server");

app.post("/create-item", (req, res) => {
  const db = getDb(); // 3.x da callback orqali ishlatamiz

  if (!db) return res.status(500).json({ error: "DB not ready" });

  db.collection("items").insertOne(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: "Insert failed" });
    res.json({ status: "success" });
  });
});

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3 Ciews code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing cocde

// app.get("/", function (req, res) {
//   res.end(`<h1 style="background: red">HELLO WORLD by Morris</h1>`);
// });

// app.get("/gift", function (req, res) {
//   res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
// });

app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get(`/author`, (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
