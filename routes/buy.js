const express = require("express");
const { placeOrder } = require("../controllers/order");
const { product } = require("../models/products");

const router = express.Router();
router.use(express.json());

router.post("/:prod", async (req, res) => {
  placeOrder(req, res);
});

router.get("/:prod", async (req, res) => {
  const products = await product.findOne({
    where: { product_id: req.params.prod },
  });
  res.render("form", { product: products });
});

module.exports = router;
