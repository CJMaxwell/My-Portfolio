import knex from "knex";
import knexfile from "../../knexfile";

const pg = knex(knexfile);

export const user = pg("user");
export const portfolio = pg("portfolio");
export const blog = pg("blog");
