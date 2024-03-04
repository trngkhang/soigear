const connection = require("../config/database");

const allUsers = async () => {
  let [results, fields] = await connection.query(
    "select user_id, email, password , name , address from users;"
  );
  return results;
};

module.exports = {
  allUsers,
};
