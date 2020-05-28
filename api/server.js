const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const postsRouter = require("../posts/postsRouter.js");
const authRouter = require("../auth/authRouter");

const server = express();

const sessionConfig = {
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, 
    secure: process.env.SECURE_COOKIE || false,
    httpOnly: true, 
  },
  resave: false,
  saveUninitialized: process.env.USER_ALLOWED_COOKIES || true,
  name: "monster",
  secret: process.env.COOKIE_SECRET || "keepitsecret,keepitsafe",
};


server.use(session(sessionConfig)); 

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/posts", postsRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;