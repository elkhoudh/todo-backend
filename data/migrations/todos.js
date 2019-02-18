exports.up = function(knex, Promise) {
  return knex.schema.createTable("todos", tbl => {
    tbl.increments();

    tbl.string("task").notNullable();
    tbl.boolean("completed").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("todos");
};
