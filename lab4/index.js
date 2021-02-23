const express = require("express");
const morgan = require("morgan");
const path = require("path");

const tvRouter = require("./tvshows");

const app = express();
app.use(morgan("tiny"));

app.use("/api", tvRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
