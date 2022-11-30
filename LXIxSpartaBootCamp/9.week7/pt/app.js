const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const commentsRouter = require("./routes/comments");
const likesRouter = require("./routes/likes");

app.use(express.json());

app.use("/api", [postsRouter, commentsRouter, usersRouter]);

app.listen(port, () => {
    console.log(port, `Server is open with port : ${port}`);
  });