const express = require("express");
const passport = require("passport");
const { handleRegister } = require("../controllers/users");
const { login } = require("../models/logins");
const { customer } = require("../models/customers");

const router = express.Router();

router.post("/register", handleRegister);

router.post("/login", passport.authenticate("local", {failureRedirect: "/login", successRedirect:"/"}));

module.exports = router;
