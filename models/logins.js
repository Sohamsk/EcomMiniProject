const { DataTypes } = require("sequelize");
const db = require("./connection");

const login = db.define(
  "login",
  {
    login_id: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    login_pwd: {
      type: DataTypes.STRING(80),
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
