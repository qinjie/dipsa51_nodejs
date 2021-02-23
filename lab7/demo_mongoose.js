const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sa51", {
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

  // Schema
  const kittySchema = new mongoose.Schema({
    name: String,
  });

  // Model
  const Kitten = mongoose.model("Kitten", kittySchema, "kitten");

  let result = Kitten.find();
  console.log(result);

//   let pet1 = new Kitten({ name: "miao 1" });
//   let pet2 = new Kitten({ name: "miao 2" });
//   pet1.save((err, result) => {
//     console.log(`Error = ${err}`);
//     console.log(`Result = ${result}`);
//   });

//   pet2.save((err, result) => {
//     console.log(`Error = ${err}`);
//     console.log(`Result = ${result}`);
//   });
});
