// const request = require("supertest");
// const server = require("../api/server");
// const db = require("../database/dbConfig");

// beforeEach(() => {
//   return db.migrate
//     .rollback()
//     .then(() => db.migrate.latest())
//     .then(() => db.seed.run());
// });

// test("POST /api/auth/register to be successful", async () => {
//   const res = await request(server)
//     .post("/api/auth/register")
//     .send({ username: "test12", password: "pogchamp", });
//   expect(res.status).toBe(201)
//   expect(res.body).toHaveProperty("data");
// });

// test("POST /api/auth/login to be successful", async () => {
//   const register = await request(server)
//     .post("/api/auth/register")
//     .send({ username: "test12", password: "pogchamp" });
//   const res = await request(server)
//     .post("/api/auth/login")
//     .send({ username: "test12", password: "pogchamp" });
//   expect(res.status).toBe(200);
//   expect(res.body).toHaveProperty("token");
// });

// test("GET /api/posts to get posts", async () => {
//     const register = await request(server)
//       .post("/api/auth/register")
//       .send({ username: "test12", password: "pogchamp" });
//     const login = await request(server)
//       .post("/api/auth/login")
//       .send({ username: "test12", password: "pogchamp" });
//     const res = await request(server)
//       .get("/api/posts")
//       .set("authorization", login.body.token);
//     expect(res.body.data).toHaveLength(1);
//     expect(res.body.data[0]).toHaveProperty("id");
//   });

//   test("POST /api/posts to post posts", async () => {
//     const register = await request(server)
//       .post("/api/auth/register")
//       .send({ username: "test12", password: "pogchamp" });
//     const login = await request(server)
//       .post("/api/auth/login")
//       .send({ username: "test12", password: "pogchamp" });
//     const res = await request(server)
//       .post("/api/posts")
//       .set("authorization", login.body.token)
//       .send({ title: "test title", description: "test description" });
//     expect(res.status).toBe(201)
//     expect(res.type).toBe("application/json");
//   });

//   test("PUT /api/posts to edit posts", async () => {
//     const register = await request(server)
//       .post("/api/auth/register")
//       .send({ username: "test12", password: "pogchamp" });
//     const login = await request(server)
//       .post("/api/auth/login")
//       .send({ username: "test12", password: "pogchamp" });
//     const res = await request(server)
//       .put("/api/posts/1")
//       .set("authorization", login.body.token)
//       .send({ title: "test title2", description: "test description2"  });
//     expect(res.status).toBe(200)
//     expect(res.type).toBe("application/json");
//   });

//   test("delete /api/posts to delete posts", async () => {
//     const register = await request(server)
//       .post("/api/auth/register")
//       .send({ username: "test12", password: "pogchamp" });
//     const login = await request(server)
//       .post("/api/auth/login")
//       .send({ username: "test12", password: "pogchamp" });
//     const res = await request(server)
//       .delete("/api/posts/1")
//       .set("authorization", login.body.token);
//     expect(res.status).toBe(200)
//     expect(res.type).toBe("application/json");
//   });



