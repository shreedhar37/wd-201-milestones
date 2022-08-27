// deleteTodo.js
const { connect } = require("./connectDB.js");
const Todo = require("./Todo.js");
connect()
  .then(() => {
    return Todo.destroy({ where: { id: 3 } });
  })
  .then((deletedRowCount) => {
    console.log(deletedRowCount);
  })
  .catch((err) => console.error(err));
