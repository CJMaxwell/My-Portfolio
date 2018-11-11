import express from "express";
import * as routes from "./routes";
import { mountRoutes } from "./helpers";

import { port } from "./config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

mountRoutes(app, routes);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
