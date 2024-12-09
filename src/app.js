const express = require("express");
const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");
const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/articles", articleRoutes);

module.exports = app;
