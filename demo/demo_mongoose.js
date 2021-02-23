const mongoose = require("mongoose");

conn_str = "mongodb://localhost:270/demo";

mongoose.connect(conn_str, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("error", () => {
  console.error.bind(console, "connection error:");
});

db.once("open", function () {
  console.log(mongoose.STATES[mongoose.connection.readyState]);
  console.log("Connection Successful!");
});

// let userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//     validate: (value) => {
//       return validator.isEmail(value);
//     },
//   },
// });

// let UserModel = mongoose.model("User", userSchema, "user");
