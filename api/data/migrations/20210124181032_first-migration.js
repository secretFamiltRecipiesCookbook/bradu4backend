exports.up = async function (knex) {
  await knex.schema
    .createTable('users', users => {
      users.increments('user_id');
      users.string('username', 255).notNullable().unique();
      users.string('password', 255).notNullable();
      users.timestamps(false, true);
    })
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id').notNullable().unique();
      tbl.string('title', 255).notNullable();
      tbl.string('source', 255).notNullable();
      tbl.string('ingredients', 255).notNullable();
      tbl.string('instructions', 255).notNullable();
      tbl.string('category', 255).notNullable();
      tbl.string('image');
    })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('recipes');
  await knex.schema.dropTableIfExists('users');
};
