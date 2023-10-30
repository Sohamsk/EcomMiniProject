const { product } = require("../models/products");
const { order } = require("../models/orders");

async function placeOrder(req, res) {
  try {
    const prod = await product.findByPk(req.params.prod);
    if (!prod) {
      throw error;
    }
    await order.create({
      product_id: prod.product_id,
      customer_id: req.session.email,
      order_date: `${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()}`,
    });
    res.send({ status: 0 });
  } catch (error) {
    console.log(error);
    res.status(406).send({ message: "only one order for one user" });
  }
}

module.exports = {
  placeOrder,
};
