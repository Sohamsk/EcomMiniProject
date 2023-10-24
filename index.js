const express = require("express");
const path = require("path");
const db = require("./models/connection")

const app = express();
const PORT = 3000;

app.use(express.static("static"));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

const pages = require("./routes/pages");
app.use("/", pages);

// const userRoutes = require("./routes/user");
// app.use("/v1/", userRoutes);

// const urlRoutes = require("./routes/url");
// app.use("/url/", urlRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Test</h1>");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
