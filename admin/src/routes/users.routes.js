const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getCreateUser,
  postCreateUser,
  getEditUser,
  postEditUser,
} = require("../controllers/users.controllers");

router.get("/all", getAllUsers);
router.get("/create", getCreateUser);
router.post("/create", postCreateUser);
router.get("/:userId/edit", getEditUser);
router.post("/:userId/edit", postEditUser);
module.exports = router;
