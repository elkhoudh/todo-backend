const db = require("../data/dbConfig");

const get = () => db("todos");

const addTodo = task => db("todos").insert(task);

const remove = id =>
  db("todos")
    .where("id", id)
    .del();

const getById = id =>
  db("todos")
    .where("id", id)
    .first();

const completed = (id, changes) => {
  db("todos")
    .where("id", id)
    .update(changes)
    .then(() => {
      get();
    });
};

const clearCompleted = () => {
  db("todos")
    .where("completed", 1)
    .del()
    .then(() => {
      get();
    });
};

module.exports = {
  get,
  addTodo,
  remove,
  getById,
  completed,
  clearCompleted
};
