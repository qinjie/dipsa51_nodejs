const express = require("express");
const bodyParser = require("body-parser");
const routerQR = require("./routerQR");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", routerQR);

app.listen(3000, () => "Server is running at port 3000...");
