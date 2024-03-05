const { allUsers, createUser } = require("../services/adminServices");

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

module.exports = {
  getAllUsers,
  getCreateUser,
  postCreateUser,
};
