const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./db");
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const PORT = process.env.PORT || 4000;
const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");

app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);

app.listen(PORT, () => {
  console.log("listening on port 4000");
});
