const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");

const { initializePassport } = require("./utils/passport-config");
initializePassport(passport);

const app = express();
const PORT = 2000;

app.use(express.static("static"));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(
  session({
    secret: "mySecret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// app.use(
//   session({
//     secret: "secret1",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 10000,
//     },
//   })
// );
const { login } = require("./models/logins");
const { customer } = require("./models/customers");
app.post("/register", async (req, res) => {
  const usr = await login.findOne({ email: req.body.email });
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
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).send("logged in")
})

const pages = require("./routes/pages");
app.use("/", pages);

const buy = require("./routes/buy");
app.use("/buy/", buy);


app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
