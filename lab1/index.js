const express = require("express");

const app = express();


const handler = (req, resp) => {
    console.log(req.method);
    console.log(req.originalUrl);
    resp.send(`Request method=${req.method} url=${req.originalUrl}`);
};

app.get('/endpoint', handler);
app.post('/endpoint', handler);
app.put('/endpoint', handler);
app.delete('/endpoint', handler);


app.get("/hello", (req, resp) => {
    resp.send("Hello SEA");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
