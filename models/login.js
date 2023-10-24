const { DataTypes } = require("sequelize");
const db = require("./connection");

const login = db.define(
  "login",
  {
    email: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(72),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  login,
};
