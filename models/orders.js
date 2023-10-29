const { DataTypes } = require("sequelize");
const db = require("./connection");

const order = db.define(
  "order",
  {
    order_id: {
      type: DataTypes.CHAR(15),
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    product_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  order,
};
