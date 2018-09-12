const express = require("express");
const bodyParser = require("body-parser");
const Tft = require("./lib/tft");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const tft = new Tft();

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.post("/", (req, res) => {
  console.log(`Incoming Post Request`);
  console.log(req.body);
  if(req.body.message) {
    tft.printCenter(req.body.message, true, false)
    res.sendStatus(200);
  }
})

console.log("initializing app...");

const server = app.listen(80, () => {
  console.log(`server listening on port 80`);
  tft.printCenter("Listening...", false, true);
});