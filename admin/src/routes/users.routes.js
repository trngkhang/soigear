const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/users.controllers");

router.get("/all", getAllUsers);

module.exports = router;
