const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get('/api/todo', async (req, res) => {
    res.json(await todoService.getTodos());
  });

  // Post request
  server.post('/api/todo', async (req, res) => {
    const todo = req.body;

    if (!todo.task) {
      return res.status(400).json({ error: "Task is required" });
    }

    try {
      const updatedTodoList = await todoService.addTodo(todo);
      res.status(201).json(updatedTodoList);
    } catch (error) {
      res.status(500).json({ error: "Failed to add todo" });
    }
  });

  /**
  POST /api/todo
  {
   "task": "Some API"
  }

   {
    "todos": [
      {
        "task": "Some API"
      }
    ]
   }
  **/

  return server;
};
module.exports = server;