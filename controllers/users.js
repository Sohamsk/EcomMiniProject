const { login } = require("../models/logins");
const { customer } = require("../models/customers");

async function handleRegister(req, res) {
  const usr = await login.findByPk(req.body.email);
  if (usr) {
    return res.status(400).send("User already exists");
  }
  await customer.create({
    customer_id: req.body.email,
    customer_name: req.body.name,
    customer_address: req.body.address,
  });
  await login.create({
    login_id: req.body.email,
    login_pwd: req.body.password,
  });
  return res.status(201).send("User created");
}

module.exports = {
  handleRegister,
};
