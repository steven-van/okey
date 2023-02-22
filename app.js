const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "agence_immo",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");

  const query = "SELECT * from Logement";
  con.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
