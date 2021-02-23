const express = require("express");

const app = express();

app.use((req, resp, next) => {
  console.log("Middleware A");
  next();
});

app.use((req, resp, next) => {
  console.log("Middleware B");
  next();
});

app.use((req, resp, next) => {
  console.log("Middleware C");
  throw new Error();
});

app.use((req, resp, next) => {
  console.log("Middleware D");
});

app.use((error, req, resp, next) => {
    console.log("ERROR: 1");
    next(error, req, resp);
});

app.use((error, req, resp, next) => {
  console.log(`ERROR: ${error}`);
});

app.listen(3000, () => {
  console.log("Server running");
});
