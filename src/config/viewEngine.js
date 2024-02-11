const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const configViewEngine = (app) => {
  app.engine(
    ".hbs",
    exphbs.engine({
      extname: ".hbs", // Mở rộng mặc định của handlebars sẽ là .hbs
    })
  );
  app.set("view engine", ".hbs");
  app.set("views", path.join("./src", "views"));
};

module.exports = configViewEngine;
