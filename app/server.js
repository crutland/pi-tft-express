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
    tft.printCenter(req.body.message, true, true)
    res.sendStatus(200);
  } else {
    tft.printCenter("No Message Provided!", true, true);
    res.status(400).json({message: "You must provide a message parameter."});
  }
  setTimeout(() => tft.printCenter(`Last req: ${new Date().toLocaleString()}`), 5000);
})

console.log("initializing app...");

app.listen(80, () => {
  console.log(`server listening on port 80`);
  tft.printCenter("Now Listening...", false, true);
});