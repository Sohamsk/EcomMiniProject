const express = require("express");
const path = require("path");
const db = require("./models/connection");

const app = express();
const PORT = 3000;

app.use(express.static("static"));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

const pages = require("./routes/pages");
app.use("/", pages);

const orders = require("./routes/orders");
app.use("/buy/", orders);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
