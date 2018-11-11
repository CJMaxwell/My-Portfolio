export const up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable("user", table => {
      table
        .uuid("id")
        .primary()
        .notNullable();
      table.string("firstName").notNullable();
      table.string("lastName").notNullable();
      table
        .string("avatar")
        .defaultTo("create avatar")
        .notNullable();
      table
        .string("email")
        .unique()
        .notNullable();
      table.string("hashedPassword").notNullable();
      table
        .boolean("verified")
        .defaultTo(false)
        .notNullable();
      table
        .boolean("active")
        .defaultTo(true)
        .notNullable();
      table.timestamps(true, true);
    })
  ]);

export const down = (knex, Promise) =>
  Promise.all([knex.schema.dropTable("user")]);
