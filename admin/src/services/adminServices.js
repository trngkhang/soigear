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
module.exports = {
  allUsers,
  createUser,
};
