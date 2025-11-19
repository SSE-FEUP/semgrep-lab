const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  const id = req.query.id;
  eval("console.log(" + id + ")");   // (1) dangerous dynamic evaluation
  res.send("ok");
});

module.exports = app;
