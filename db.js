import mysql from "mysql";

 const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog"
});

module.exports = db