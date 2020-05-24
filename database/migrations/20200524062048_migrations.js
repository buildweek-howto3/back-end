
exports.up = function(knex) {

    return knex.schema
    .createTable("users", (table) => {
      table.increments();
      table.string("username", 20).notNullable().unique().index();
      table.string("password").notNullable();
    }) 

    .createTable("posts", (posts) => {
        posts.increments();
        posts.string("title", 128).notNullable().unique().index();
        posts.string("description", 256).notNullable();
        posts.string("materials", 256);
        posts.string("video");
        posts.string("instructions");
  
        posts
          .integer("user_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("users")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })

      .createTable("steps", (table) => {
        table.increments();
        table.string("stepName", 256);
        table.string("stepNumber", 256)
  
        // foreign key
        table
          .integer("posts_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("posts")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });

      
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("posts")
    .dropTableIfExists("users")
  
};
