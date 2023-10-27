const { DataTypes } = require("sequelize");
const db = require("./connection");

const customer = db.define(
  "customer",
  {
    customer_id: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    customer_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    customer_address: {
      type: DataTypes.STRING(512),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  customer,
};
