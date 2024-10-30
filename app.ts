import express from "express";
const app = express();
const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
  console.log("App started successfully!!!!!");
});

app.get("/", (req, res) => {
  res.send("Hello From Hoi Hoi Express!!!!!!!");
});
