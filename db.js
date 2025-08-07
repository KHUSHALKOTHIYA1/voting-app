const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.MONGODB_URI;

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("mongodb server connected");
});

db.on("error", () => {
  console.log("mongodb server error", error);
});

db.on("disconnected", () => {
  console.log("mongodb disconnected");
});

module.exports = db;
