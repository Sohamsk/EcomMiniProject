const { DataTypes } = require("sequelize");
const db = require("./connection");

const order = db.define(
  "order",
  {
    customer_id: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false,
      unique: true,
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
