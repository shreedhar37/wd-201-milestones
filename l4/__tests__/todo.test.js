let todoList = require("../todo.js");

const { all, markAsComplete, add, overDue } = todoList();
/* eslint-disable no-undef */
describe("Todo List Test Suite", () => {
  test("Should add a new todo", () => {
    add({
      title: "A test item",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(1);
  });
  test("Should mark a Todo as complete", () => {
    expect(all.length).toEqual(1);
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });
  test("Should return overdue items", () => {
    expect(all.length).toEqual(1);
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    add({
      title: "An overdue test item",
      completed: false,
      dueDate: new Date(today.getTime() - 2 * oneDay).toLocaleDateString(
        "en-CA"
      ),
    });
    expect(all.length).toEqual(2);
    overdueItems = overDue();
    expect(overdueItems.length).toBe(1);
  });
});
