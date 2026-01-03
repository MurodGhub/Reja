// console.log("Web serverni boshlash");
// const express = require("express");
// const app = express();

// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

// // MongoDB chaqirish

// const { getDb } = require("../server");

// app.post("/create-item", (req, res) => {
//   const db = getDb();

//   if (!db) return res.status(500).json({ error: "DB not ready" });

//   db.collection("items").insertOne(req.body, (err, result) => {
//     if (err) return res.status(500).json({ error: "Insert failed" });
//     res.json({ status: "success" });
//   });
// });

// // 1 Kirish code
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // 2: Session code

// // 3 Ciews code
// app.set("views", "views");
// app.set("view engine", "ejs");

// // 4 Routing cocde
// const db = getDb();
// app.post("/create-item", (req, res) => {
//   console.log(req.body);
//   res.end("success");
// });
// app.get("/", function (req, res) {
//   db.collection("plans")
//     .find()
//     .toArray((err, data) => {
//       if (err) {
//         console.log(err);
//         res.end("something went wrong");
//       } else {
//         console.log(data);
//         res.render("reja");
//       }
//     });
// });

// module.exports = app;

console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();

/*const fs = require('fs'); 
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR",err);
    } else {
        user = JSON.parse(data)
    }
});*/

//Mongo DB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

//1: Kirish Kodlari
app.use(express.static("public")); //public ichidagi filelarga/ma'lumotlarga dostup beradi
app.use(express.json()); //json formatdagi datani objectga o'girib beradi
app.use(express.urlencoded({ extended: true }));

//2: Session code

//3: Views code

app.set("views", "views");
app.set("view engine", "ejs"); //BSSR backend ichida frontendni qurib olish

//4: Routing code

app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
