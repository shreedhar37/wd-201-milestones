// createItem.js
const { connect } = require("./connectDB.js");
const Todo = require("./Todo.js");
connect()
  .then(() => {
    return Todo.create({
      title: "First Item",
      dueDate: new Date(),
      complete: false,
    });
  })
  .then((todo) => {
    console.log(todo);
  })
  .catch((err) => console.error(err));
