const { todo } = require("node:test");

let todoList = {
  todos: [
    {
      "task": "This is a todo example"
    }
  ]
};

module.exports = {
  // function to get data from task
  getTodos: () => Promise.resolve(todoList),
  // function to add data to task list
  addTodo: (todo) =>{
    todoList.todos.push(todo);
    return Promise.resolve(todoList);
  }
};