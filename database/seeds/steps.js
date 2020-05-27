
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {stepName: 'loop', stepNumber: '1', posts_id: 1},
        {stepName: 'the', stepNumber: '2', posts_id: 1},
        {stepName: 'loop', stepNumber: '3', posts_id: 1}

      ]);
    });
};


// .createTable("steps", (table) => {
//   table.increments();
//   table.string("stepName", 256);
//   table.string("stepNumber", 256)

//   // foreign key
//   table
//     .integer("posts_id")
//     .unsigned()
//     .notNullable()
//     .references("id")
//     .inTable("posts")
//     .onDelete("CASCADE")
//     .onUpdate("CASCADE");
// });