const express = require("express");
const { placeOrder } = require("../controllers/order");
const { isLoggedIn } = require("../middlewares/loggedIn");

const router = express.Router();
router.use(express.json());

router.put("/:prod", isLoggedIn, async (req, res) => {
  placeOrder(req, res);
});

module.exports = router;
