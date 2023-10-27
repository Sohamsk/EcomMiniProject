const express = require("express");
const { product } = require("../models/products");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
  const prod = await product.findAll({});
  res.render("front", { products: prod });
});

router.get("/success", (req, res) => {
  res.send("<h1>Thank You</h1>");
});

router.get("/:prod", async (req, res) => {
  const prod = await product.findOne({
    where: { product_id: req.params.prod },
  });
  res.render("description", { product: prod });
});

module.exports = router;
