const { allUsers } = require("../services/adminServices");

const getAllUsers = async (req, res) => {
  let results = await allUsers();
  return res.render("users/users.hbs", { listUsers: results });
};

module.exports = {
  getAllUsers,
};
