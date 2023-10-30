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
    cookie: {
      maxAge: 10000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

const auth = require("./routes/auth");
app.use("/auth/", auth);

const pages = require("./routes/pages");
app.use("/", pages);

const buy = require("./routes/buy");
app.use("/buy/", buy);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
