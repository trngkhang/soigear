const connection = require("../config/database");

const allUsers = async () => {
  let [results, fields] = await connection.query(
    "select user_id, email, password , name , address from users;"
  );
  return results;
};
const createUser = async (user) => {
  const [results] = await connection.query(
    `INSERT INTO Users (email, password, name, address) Values(?, ? ,? ,?)`,
    [user.email, user.password, user.name, user.address]
  );
};
const sv_readUser = async (id) => {
  const [results] = await connection.query(
    `select user_id, email, password , name , address from users where user_id=?`,
    [id]
  );
  return results;
};
const sv_editUser = async (user) => {
  console.log(user);
  const results = await connection.query(
    `update Users
    set password=?, name=?, address=?
    where user_id=?`,
    [user.password, user.name, user.address, user.user_id]
  );
};
module.exports = {
  allUsers,
  createUser,
  sv_editUser,
  sv_readUser,
};
