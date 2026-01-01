// const http = require("http");
// const mongodb = require("mongodb");

// let db;
// const connectionString =
//   "mongodb+srv://norqulovmurodbek07_db_user:lvxUDs1H8u4zGCYz@cluster0.dfpqzwj.mongodb.net/test";

// mongodb.connect(
//   connectionString,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err, client) => {
//     if (err) console.log("ERROR on connection MongoDB");
//     else {
//       console.log("MongoDB connection succed");
//       // module.exports = client;
//       const app = require("./views/app");
//       const server = http.createServer(app);
//       let PORT = 3000;
//       server.listen(PORT, function () {
//         console.log(
//           `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
//         );
//       });
//     }
//   }
// );

const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://norqulovmurodbek07_db_user:lvxUDs1H8u4zGCYz@cluster0.dfpqzwj.mongodb.net/test";

mongodb.connect(connectionString, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log("MongoDB connection ERROR");

  db = client.db("test");
  console.log("MongoDB connection succed");

  const app = require("./views/app");
  const server = http.createServer(app);
  server.listen(3000, () => console.log("Server running on port 3000"));
});

module.exports = {
  getDb: () => db,
};
