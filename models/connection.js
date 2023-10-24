const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:soham2003@localhost:5432/ecomMini",
  // { logging: true }
);

module.exports = sequelize;
