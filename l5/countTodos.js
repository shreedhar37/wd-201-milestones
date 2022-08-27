// countTodos.js
const { connect } = require("./connectDB.js");
const Todo = require("./Todo.js");
connect()
  .then(() => {
    return Todo.count();
  })
  .then((todoCount) => {
    console.log(todoCount); // Shows '1'
  })
  .catch((err) => console.error(err));
