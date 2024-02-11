require("dotenv").config();
const path = require("path");
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const app = express();
const webRoutes = require("./routes/web.routes");

//template engine
configViewEngine(app);

//route
app.use("/", webRoutes);

//config evironment
const port = process.env.PORT;
const localhost = process.env.localhost;

app.listen(port, localhost, () => {
  console.log(`Example app listening on port ${port}`);
});
