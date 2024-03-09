const {
  allCategories,
  createCategory,
} = require("../services/category.services");

const getAllCategories = async (req, res) => {
  let listCategories = await allCategories();
  return res.render("categories/all.hbs", { listCategories });
};
const getCreateCategory = async (req, res) => {
  return res.render("categories/create.hbs");
};
const postCreateCategory = async (req, res) => {
  let results = await createCategory(req.body);
  return res.redirect("/category/all");
};

module.exports = {
  getAllCategories,
  getCreateCategory,
  postCreateCategory,
};
