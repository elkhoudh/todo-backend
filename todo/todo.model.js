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

module.exports = {
  get,
  addTodo,
  remove,
  getById
};
