import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

console.log("initializing app...");

const server = app.listen(80, () => {
  console.log(`server listening on port 80`);
});