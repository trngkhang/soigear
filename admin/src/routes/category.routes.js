const express = require("express");
const {
  getAllCategories,
  getCreateCategory,
  postCreateCategory,
} = require("../controllers/category.controllers");
const router = express.Router();

router.get("/all", getAllCategories);
router.get("/create", getCreateCategory);
router.post("/create", postCreateCategory);

module.exports = router;
