const nanoid = require("nanoid");
const { product } = require("../models/products");
const { order } = require("../models/orders");

async function placeOrder(req, res) {
  try {
    const prod = await product.findByPk(req.params.prod);
    const dt = new Date();

    // console.log(prod);
    if (!prod) {
      throw error;
    }

    console.log(req.user);

    const id = nanoid.nanoid(15);
    await order.create({
      order_id: id,
      product_id: prod.product_id,
      customer_id: req.user.login_id,
      order_date: `${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()}`,
    });
    res.status(202).send({ orderid: id });
  } catch (error) {
    console.log(error);
    res.status(406);
  }
}

module.exports = {
  placeOrder,
};
