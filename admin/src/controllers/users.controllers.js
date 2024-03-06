const {
  allUsers,
  createUser,
  sv_editUser,
  sv_readUser,
} = require("../services/adminServices");

const getAllUsers = async (req, res) => {
  let results = await allUsers();
  return res.render("users/users.hbs", { listUsers: results });
};
const getCreateUser = async (req, res) => {
  return res.render("users/create.hbs");
};
const postCreateUser = async (req, res) => {
  let results = await createUser(req.body);
  return res.redirect("/users/all");
};
const getEditUser = async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  let userInfo = await sv_readUser(userId);
  //chuyen mang userInfo sang doi tuong user
  let user = userInfo[0];
  return res.render("users/edit.hbs", { user });
};
const postEditUser = async (req, res) => {
  console.log(req.body);
  let results = await sv_editUser({ ...req.body, user_id: req.params.userId });
  return res.redirect("/users/all");
};

module.exports = {
  getAllUsers,
  getCreateUser,
  postCreateUser,
  getEditUser,
  postEditUser,
};
