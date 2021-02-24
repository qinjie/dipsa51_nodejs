/*
    Use qr-image module to generate QR Code
    https://www.npmjs.com/package/qr-image
*/

const qr = require("qr-image");
const fs = require("fs");
const path = require("path");

/* Synchronous Mode */
const code = qr.imageSync("http://www.google.com", { type: "png" });
const filePath = path.join(__dirname, "qr.png");
const output = fs.createWriteStream(filePath);
output.write(code);

/* Asynchronous Mode */
// const code = qr.image("http://www.google.com", { type: "png" });
// const filePath = path.join(__dirname, "qr.png");
// const output = fs.createWriteStream(filePath);
// code.pipe(output);
