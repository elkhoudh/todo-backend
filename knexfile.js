module.exports = {
  development: {
    client: "sqlite3",
    connection: { filename: "./todo.db3" },
    useNullAsDefault: true
  }
};
