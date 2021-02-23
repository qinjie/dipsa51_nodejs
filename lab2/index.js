const express = require("express");
const morgan = require("morgan");
const path = require('path');

const app = express();

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, resp) => {
  resp.send("Index page");
});

// app.get("/error", (req, resp) => {
//   throw new Error("Throwing new error");
// });

app.get("/time", (req, resp) => {
  let dt = new Date();
  resp.format({
    "text/html": () => {
      resp.send(`<h1>${dt.toLocaleString()}</h1>`);
    },
    "application/json": () => {
      resp.send({ datetime: dt.toLocaleString() });
    },
    default: () => {
      resp.send(dt.toLocaleString());
    },
  });
});

app.use(function (req, res, next) {
    res.status(404).redirect('/404.html');
//   res
//     .status(404)
//     .send(
//       `<h1>Sorry - Resource not found! "${req.method} ${req.originalUrl}"</h1>`
//     );
});

app.use(function (err, req, res, next) {
  res.status(500).send(`<h1>Sorry - broken link`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
