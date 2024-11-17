import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validation
    if (!task.trim()) {
      setError("Must write something to add a task");
      return;
    }

    if (task.length < 3) {
      setError("Task must be at least 3 characters long");
      return;
    }

    // Clear error and dispatch action
    setError("");
    dispatch(addTodo({ task }));
    setTask("");
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleAddTodo}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task"
          className="add-task-input"
        />
        <button type="submit">Add Task</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddTodo;