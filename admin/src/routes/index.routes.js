const usersRouter = require("./users.routes");
const homeRouter = require("./home.routes");

function route(app) {
  app.use("/users", usersRouter);

  app.use("/", homeRouter);
}

module.exports = route;
