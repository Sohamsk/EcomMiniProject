const express = require("express");
const { product } = require("../models/products");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
  const logged = req.user ? true : false;
  const prod = await product.findAll({});
  res.render("front", { products: prod, loggedin: logged });
  console.log(req.session);
});

router.get("/register", (req, res) => {
  res.render("form");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/product/:prod", async (req, res) => {
  const prod = await product.findOne({
    where: { product_id: req.params.prod },
  });
  res.render("description", { product: prod });
});

// sending images in description page
router.get("/product/images/:img", (req, res) => {
  res.redirect(`/images/products/${req.params.img}`);
});

module.exports = router;
