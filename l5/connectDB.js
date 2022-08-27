const Sequelize = require("sequelize");

const sequelize = new Sequelize("todo_db", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

const connect = async () => {
  return sequelize.authenticate();
};

module.exports = {
  connect,
  sequelize,
};
