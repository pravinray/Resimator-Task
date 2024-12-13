import React, { useState } from "react";
import userData from "../data/userData.json";

const TaskManager = () => {
  const [tasks, setTasks] = useState(userData.tasks);

  const addTask = (title) => {
    const newTask = { id: tasks.length + 1, title, status: "Pending" };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Task Manager</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center">
            {task.title} ({task.status})
            <button className="text-red-500" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded" onClick={() => addTask(`Task ${tasks.length + 1}`)}>
        Add Task
      </button>
    </div>
  );
};

export default TaskManager;
