require("dotenv").config();
const path = require("path");
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const app = express();

//template engine
configViewEngine(app);

app.get("/", function (req, res) {
  res.render("home");
});

//config evironment
const port = process.env.PORT;
const localhost = process.env.localhost;

app.listen(port, localhost, () => {
  console.log(`Example app listening on port ${port}`);
});
