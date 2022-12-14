const todoList = () => {
  all = [];
  currentDate = new Date().toISOString().split("T")[0];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.

    return all.filter((task) => task.dueDate < currentDate);
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    return all.filter((task) => task.dueDate === currentDate);
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    return all.filter((task) => task.dueDate > currentDate);
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    let outputString = "";
    list.forEach((task) => {
      outputString += `[${task.completed ? "x" : " "}] ${task.title} ${
        task.dueDate === currentDate ? "" : task.dueDate
      }\n`;
    });
    return outputString;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var d = new Date();
const today = formattedDate(d);
const yesterday = formattedDate(new Date(d.setDate(d.getDate() - 1)));
const tomorrow = formattedDate(new Date(d.setDate(d.getDate() + 2)));

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
