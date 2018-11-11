import pg from "pg";

import { dbURL, env } from "./src/config";

if (env === "production") {
  pg.defaults.ssl = true;
}

export const client = "pg";
export const connection = dbURL;

export default {
  client: "pg",
  connection: dbURL
};
