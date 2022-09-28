const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/welcom.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "/profile.html"));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "/profile.html"));
});

app.get("/gallary", (req, res) => {
  res.sendFile(path.join(__dirname, "/gallary.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
