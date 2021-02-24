const mongoose = require("mongoose");
const express = require("express");
const app = require("../app.js");

let DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/sa51";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.error.bind(console, "connection error:");
});
db.once("open", function () {
  console.log(mongoose.STATES[mongoose.connection.readyState]);
  console.log("Connected to database.");
  app.emit('ready');
});

console.log(mongoose.STATES[mongoose.connection.readyState]);
