const { login } = require("../models/logins");
const { customer } = require("../models/customers");
const bcrypt = require("bcrypt");

async function handleRegister(req, res) {
  const usr = await login.findByPk(req.body.email);
  if (usr) {
    return res.status(400).send("User already exists");
  }

  const saltRounds = 12;

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(req.body.password, salt);
  await customer.create({
    customer_id: req.body.email,
    customer_name: req.body.name,
    customer_address: req.body.address,
  });
  await login.create({
    login_id: req.body.email,
    login_pwd: hash,
  });
  return res.status(201).send("User created");
}

module.exports = {
  handleRegister,
};
