require("dotenv").config();
const path = require("path");
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const app = express();
const route = require("./routes/index.routes");

//template engine
configViewEngine(app);

//json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
route(app);

//config evironment
const port = process.env.PORT;
const localhost = process.env.localhost;

app.listen(port, localhost, () => {
  console.log(`Example app listening on port ${port}`);
});
