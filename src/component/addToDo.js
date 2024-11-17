import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (task.trim()) {
      dispatch(addTodo({ task }));
      setTask("");
    }
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
    </div>
  );
};

export default AddTodo;