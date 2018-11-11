import express from "express";

import { port } from "./config";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
