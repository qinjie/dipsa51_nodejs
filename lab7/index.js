const express = require("express");
require("dotenv").config();
const bookRouter = require("./routers/bookRouter");

// console.log(process.env.PORT);
// console.log(process.env.DATABASE_URL);
let PORT = process.env.PORT || 3000;

const app = require("./app.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//     localhost:3000/books
app.use("/", bookRouter);

require("./models/db.js");

app.on("ready", () => {
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
});
