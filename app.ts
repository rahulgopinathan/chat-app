import express from "express";
const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log("App started successfully");
});
