const { login } = require("../models/login");

async function registerUser() {
  try {
    console.log("test");
    const test = await login.create({
      email: "test@test.com",
      password: "adfasdfasdfasdfsdf",
      customer_id: 15,
    });
    console.log(test.email, test.password, test.customer_id);
  } catch (error) {
    console.log(error);
  }
}

module.exports = registerUser;
