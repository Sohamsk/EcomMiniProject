const express = require("express");
const passport = require("passport");
const { handleRegister } = require("../controllers/users");

const router = express.Router();

router.post("/register", handleRegister);

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).send();
});

module.exports = router;
