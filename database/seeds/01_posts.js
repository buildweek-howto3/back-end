
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'How To Tie Your Shoes', description: 'loop the loop', materials: 'shoes', user_id: 1},
      ]);
    });
};


// posts.increments();
// posts.string("title", 128).notNullable().unique().index();
// posts.string("description", 256).notNullable();
// posts.string("materials", 256);
// posts.string("video");
// posts.string("instructions");