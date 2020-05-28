const db = require("../database/dbConfig");

module.exports = {
  find,
  insert,
  findByUsername,
  getById,
  getUserPosts,
  getStepsById,
  getPosts,
  add,
  addStep,
  getPostById,
  remove,
  update
};

function find() {
  return db("users")
  .select('users.id','users.username')
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
    return db("posts as p")
    .join('users as u', 'u.id', 'p.user_id')
    .select('p.id as postId',"p.title", 'p.description', "p.materials", "p.instructions", "p.video", "u.username as postedBy")
    .where("p.user_id", userId)
  }

  function getStepsById(postId) {
      return db('steps as s')
        .join('posts as p', 'p.id', 's.posts_id')
        .select('s.id as stepId', "p.title", 's.stepName', "s.stepNumber")
        .where('s.posts_id', postId)
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

function add(post) {
  return db("posts").insert(post);
}

function addStep(step) {
  return db("steps").insert(step)
}

function getPostById(id) {
  return db("posts as p")
  .where({id})
  .first()
}

function remove(id) {
  return db("posts")
      .where({ id }).del();
}

function update (changes, id) {
  return db("posts")
      .where({ id })
      .update(changes)
      .then(() => {
          return getPostById(id)
      })
}