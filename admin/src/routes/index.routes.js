const usersRouter = require("./users.routes");
const homeRouter = require("./home.routes");
const categoryRouter = require("./category.routes");

function route(app) {
  app.use("/users", usersRouter);
  app.use("/category", categoryRouter);

  app.use("/", homeRouter);
}

module.exports = route;
