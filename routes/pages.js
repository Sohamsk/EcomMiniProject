const express = require("express");
const { product } = require("../models/products");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
  const prod = await product.findAll({});
  res.render("front", { products: prod });
});

router.get("/:prod", (req, res) => {
  res.render("description");
});

module.exports = router;
