const express = require("express");
const mongoose = require("mongoose");

const app = express();

conn_str = "mongodb://localhost:27017/demo";

mongoose.connect(conn_str, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("error", () => {
  console.error.bind(console, "connection error:");
});

db.once("open", () => {
  console.log(mongoose.STATES[mongoose.connection.readyState]);
  console.log("Connection Successful!");
  app.emit("ready");
});

app.get("/", (req, resp) => {
  resp.send("Hello Mongoose");
});

app.on("ready", () => {
  console.log("Mongoose Ready!");
  app.listen(3000, () => {
    console.log(
      `Server is running. Mongoose state = ${
        mongoose.STATES[mongoose.connection.readyState]
      }`
    );
  });
});
