const connection = require("../config/database");

const allCategories = async () => {
  let [results] = await connection.query(
    `select category_id, name, description from Categories`
  );
  return results;
};
const createCategory = async (category) => {
  let results = await connection.query(
    `INSERT INTO Categories (category_id, name, description)
    VALUES (?, ?, ?)`,
    [category.category_id, category.name, category.description]
  );
};
module.exports = { allCategories, createCategory };
