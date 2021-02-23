let mongoose = require("mongoose");
let validator = require("validator");

const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database", err);
    process.exit();
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

