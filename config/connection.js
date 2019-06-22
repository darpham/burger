const mysql = require('mysql');
const connection = mysql.createConnection({
  host: "locahost",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect();

module.exports = connection;