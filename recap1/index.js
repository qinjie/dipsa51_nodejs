const { response } = require("express");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
  resp.redirect("index.html");
});

let fruits = [
  { id: 1, name: "apple", count: 2 },
  { id: 2, name: "banana", count: 5 },
  { id: 3, name: "cherry", count: 7 },
];

//CRUD Operations: Create, Read, Update, Delete
//SQL Operation: Insert, Select, Update, Delete
//HTTP Methods: POST, GET, PUT, DELETE
app.get("/fruits", (req, resp) => {
  let order = req.query.order;
  if (order == "desc") {
    fruits.sort((x, y) => {
      if (x.name > y.name) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  resp.send(fruits);
});

app.get("/fruits/:id", (req, resp) => {
  let id = req.params.id;
  let result = fruits.find((item) => {
    return item.id == id;
  });
  resp.send(result);
});

app.post("/fruits", (req, resp) => {
  let f = req.body;
  if (f) {
    fruits.unshift(f); // fruits.push(f);
  }
  resp.send(fruits);
});

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
