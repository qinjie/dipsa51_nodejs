const express = require("express");
const qr = require("qr-image");

let router = express.Router();

router.get("qr/", (req, res) => {
  res.redirect("help.html");
});

router.get("qr/:data", (req, res) => {
  let options = { type: "png" };
  options = { ...options, ...req.query };
  console.log(options);

  let data = req.params.data;
  const stream = qr.image(data, options);
  res.type(options.type);
  stream.pipe(res);
});

router.post("qr/", (req, res) => {
  let options = { type: "png" };
  options = { ...options, ...req.query };
  console.log(options);

  let data = req.body;
  console.log(req.headers);
  console.log(req.body);

  const stream = qr.image(data.data, options);
  res.type(options.type);
  stream.pipe(res);
});

const getRespType = (type) => {
  if (options.type == "svg") {
    return "svg";
  } else if (options.type == "pdf") {
    return "application/pdf";
  }
  return "image/png";
};

app.get("/qr/:data", (req, res) => {
  /* Synchronous Mode */
  try {
    let options = { type: "png", ...req.query };
    const code = qr.imageSync(req.params.data, options);
    const filePath = path.join(
      __dirname,
      "images",
      uuidv4() + "." + options.type
    );
    console.log(filePath);
    fs.writeFileSync(filePath, code);

    let restype = getRespType(options.type);
    res.type(restype);

    res.sendFile(filePath);
  } catch (err) {
    console.log(err.stack);
    return res.status(500).send(err);
  }
});

module.exports = router;
