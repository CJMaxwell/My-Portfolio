export const up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable("portfolio", table => {
      table
        .uuid("id")
        .primary()
        .notNullable();

      table
        .string("title")
        .unique()
        .notNullable();
      table.string("description").notNullable();
      table.timestamps(true, true);
    })
  ]);

export const down = (knex, Promise) =>
  Promise.all([knex.schema.dropTable("portfolio")]);
