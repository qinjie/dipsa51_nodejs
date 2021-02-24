const jwt = require("jsonwebtoken");

SECRET = "mysecret";

let payload = {
  username: "markqj",
  iss: "ISS",
};
let token = jwt.sign(payload, SECRET, { expiresIn: 3 });
console.log(token);

setTimeout(() => {
  jwt.verify(token, SECRET, (err, result) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(result);
    }
  });
}, 5000);
