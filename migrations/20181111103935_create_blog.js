export const up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable("blog", table => {
      table
        .uuid("id")
        .primary()
        .notNullable();

      table
        .string("title")
        .unique()
        .notNullable();
      table.string("description").notNullable();
      table.string("tag").notNullable();
      table
        .uuid("authorId")
        .references("id")
        .inTable("user")
        .onDelete("NO ACTION")
        .onUpdate("CASCADE")
        .notNullable();
      table.timestamps(true, true);
    })
  ]);

export const down = (knex, Promise) =>
  Promise.all([knex.schema.dropTable("blog")]);
