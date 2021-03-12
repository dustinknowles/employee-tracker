const util = require("util");
const mysql = require("mysql");
// adding SQL authorization
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "employees"
});

connection.connect();
// setting up connection
connection.query = util.promisify(connection.query);

module.exports = connection;
