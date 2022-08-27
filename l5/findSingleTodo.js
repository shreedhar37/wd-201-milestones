// findSingleTodo.js
const { connect } = require("./connectDB.js");
const Todo = require("./Todo.js");
connect()
  .then(() => {
    return Todo.findOne({ where: { id: 3 } });
  })
  .then((todo) => {
    console.log(todo.get({ plain: true }));
  })
  .catch((err) => console.error(err));
