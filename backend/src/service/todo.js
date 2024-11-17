const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
    addTodo: async (todo) => {
      if(!todo.task){
        throw new Error("Task is required");
      }
      return await repository.addTodo(todo);
    }
  };
};

module.exports = todoService;