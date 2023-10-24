const { DataTypes } = require("sequelize");
const db = require("./connection");

const product = db.define(
  "product",
  {
    product_id: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    product_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    product_desc: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    product_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  product,
};
