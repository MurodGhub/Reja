const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://norqulovmurodbek07_db_user:lvxUDs1H8u4zGCYz@cluster0.dfpqzwj.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB", err);
    else {
      console.log("Databasega muvaffaqiyatli ulandi");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on  PORT: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
