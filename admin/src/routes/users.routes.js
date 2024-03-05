const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getCreateUser,
  postCreateUser,
} = require("../controllers/users.controllers");

router.get("/all", getAllUsers);
router.get("/create", getCreateUser);
router.post("/create", postCreateUser);
module.exports = router;
