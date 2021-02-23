const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tvRouter = require("./tvshows");

app.use("/api", tvRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
