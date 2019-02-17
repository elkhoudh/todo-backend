const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const todoRouter = require("./todo/index");
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use("/api/todos", todoRouter);

server.get("*", (req, res) => {
  res.send(
    "<h1 style='color: red; text-align: center;'>TODO BACKEND FOR REACT NATIVE APPLICATION</h1>"
  );
});
const port = process.env.PORT || 5000;
server.listen(port, () => console.log("Listening on port 5000..."));
