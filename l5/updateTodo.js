// updateTodo.js
const { connect } = require("./connectDB.js");
const Todo = require("./Todo.js");
connect()
  .then(() => {
    return Todo.update(
      { title: "Updated title" },
      { where: { id: 3 }, raw: true, returning: true }
    );
  })
  .then((todo) => {
    console.log(todo);
  })
  .catch((err) => console.error(err));
