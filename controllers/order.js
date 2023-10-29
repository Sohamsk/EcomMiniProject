const { product } = require("../models/products");
const { customer } = require("../models/customers");
const { order } = require("../models/orders");

async function placeOrder(req, res) {
  try {
    let dt = new Date();
    await customer.create({
      customer_id: req.body.email,
      customer_name: req.body.name,
      customer_address: req.body.address,
    });

    await order.create({
      product_id: req.params.prod,
      customer_id: req.body.email,
      order_date: `${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()}`,
    });
    res.send({ status: 0 });
  } catch (error) {
    if ((error.name = "SequelizeUniqueConstraintError")) {
      console.log(error);
      res.send({ status: 1, message: "only one order for one user" });
    }
  }
}

module.exports = {
  placeOrder,
};
