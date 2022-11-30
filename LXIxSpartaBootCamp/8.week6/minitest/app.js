const express = require('express');
const usersRouter = require("./routes/users");

const connect = require("./schemas");
connect();

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", [usersRouter]);

app.listen(port, () => {
  console.log(port, 'Server is open with port!');
});