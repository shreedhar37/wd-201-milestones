//  Todo.js

const { sequelize } = require("./connectDB.js");
const { DataTypes } = require("sequelize");

const Todo = sequelize.define(
  "Todo",
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    complete: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "todos",
  }
);
module.exports = Todo;
Todo.sync(); // create the table
