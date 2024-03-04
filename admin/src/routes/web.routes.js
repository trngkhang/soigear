const express = require("express");
const router = express.Router();
const getHome = require("../controllers/home.controllers");
const usersRouter = require("./users.routes");

router.get("/", getHome);
router.get("/users", usersRouter);

module.exports = router;
