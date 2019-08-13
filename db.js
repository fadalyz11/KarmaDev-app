const mongodb = require("mongodb");

const connectionString = "mongodb:localhost/KarmaDev-app";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true },
  function(err, client) {
    module.exports = client.db();
    const app = require("./app");
    app.listen(3000);
  }
);
