const express = require("express");
const Todos = require("./todo.model");
const route = express.Router();

route.get("/", (req, res) => {
  Todos.get()
    .then(todos => res.json(todos))
    .catch(() => res.status(500).json({ message: "Server Error" }));
});

route.post("/", (req, res) => {
  const { task } = req.body;
  if (!task) {
    res.status(422).json({ message: "Task required" });
  } else {
    Todos.addTodo({ task })
      .then(result => {
        if (result.length > 0) {
          Todos.get().then(todos => {
            res.json(todos);
          });
        }
      })
      .catch(() => res.status(500).json({ message: "Server Error" }));
  }
});

route.delete("/:id", (req, res) => {
  const { id } = req.params;
  Todos.remove(id)
    .then(result => {
      if (result) {
        Todos.get().then(todos => {
          res.json(todos);
        });
      } else {
        res.status(404).json({ message: "Failed to delete" });
      }
    })
    .catch(() => {
      res.status(500).json({ message: "Server Error" });
    });
});
module.exports = route;
