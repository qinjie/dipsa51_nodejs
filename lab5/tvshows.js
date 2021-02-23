const express = require("express");
const { data } = require("./data");

const tvRouter = express.Router();

tvRouter.route("/tvshows").get((req, resp) => {
  let result = {};

  if (req.query.contains) {
    result = data.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(req.query.contains.toLowerCase());
    });
  } else {
    result = { response: data };
  }

  const sortTitle = (order) => {
    if (order === "asc") {
      return (a, b) => (a.title < b.title ? -1 : 1);
    }
    if (order === "desc") {
      return (a, b) => (a.title < b.title ? 1 : -1);
    }
    return undefined;
  };

  if (req.query.sorted) {
    result.sort(sortTitle(req.query.sorted));
  }

  resp.json(result);
});

tvRouter.route("/tvshows").post((req, resp) => {
  let show = req.body;
  data.push(show);
  console.log(data.slice(-1));
  resp.send(data.slice(-1));
});

tvRouter.route("/tvshows/:id").get((req, resp) => {
  const id = req.params.id;

  let result = data.filter((item) => {
    return item.id == id;
  });

  if (req.query.case) {
    if (req.query.case == "upper") {
      result[0].title = result[0].title.toUpperCase();
    } else {
      result[0].title = result[0].title.toLowerCase();
    }
  }

  resp.json(result);
});

tvRouter.route("/tvshows/:id").put((req, resp) => {
  let id = req.params.id;
  let show = req.body;

  

  resp.send(`Updating id = ${id}, item=${JSON.stringify(show)}`);
});

module.exports = tvRouter;
