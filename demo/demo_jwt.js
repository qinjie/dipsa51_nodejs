const jwt = require("jsonwebtoken");

const username = "Alex";
const roles = ["admin"];
const jwt_key = "my-secret";
const jwt_exp = "5000"; // 5 seconds

// Sign a JWT
const token = jwt.sign({ username, roles }, jwt_key, { expiresIn: jwt_exp });
console.log(token);

setTimeout(() => {
  // Verify a JWT
  jwt.verify(token, jwt_key, (err, data) => {
    if (err) {
      console.log("Token verification failed: ", err.message);
    } else {
      console.log("User: ", data);
    }
  });
}, 2000);
