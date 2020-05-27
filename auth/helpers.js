const db = require("../database/dbConfig");

module.exports = {
  find,
  insert,
  findByUsername,
  getById,
  getUserPosts,
  getStepsById,
//   findByPostId,
//   updatePost
getPosts,
};

function find() {
  return db("users");
}

function insert(user) {
  return db("users").insert(user);
}

function findByUsername(username) {
  return db("users").where({ username }).first();
}

function getById(id) {
    return db('users')
      .where({ id })
      .first();
  }

  function getUserPosts(userId) {
    return db('posts as p')
      .join('users as u', 'u.id', 'p.user_id')
      .select('p.id',"p.title", 'p.description', 'p.materials','p.video', 'u.username as postedBy')
      .where('p.user_id', userId);
  }

  function getStepsById(postId) {
      return db('steps as s')
        .join('posts as p', 'p.id', 's.post_id')
        .select('s.id', 's.stepName', "s.stepNumber", "p.title")
        .where('s.post_id', postId)
        .orderBy("s.stepNumber")
  }

//   function updatePost (changes, id) {
//     return db("posts")
//         .where({ id })
//         .update(changes)
//         .then(() => {
//             return findByPostId(id)
//         })
// }

function getPosts() {
    return db("posts as p")
    .join('users as u', 'u.id', 'p.user_id')
    .select('p.id',"p.title", 'p.description', 'p.materials','p.video', 'p.instructions', 'u.username as postedBy')
}