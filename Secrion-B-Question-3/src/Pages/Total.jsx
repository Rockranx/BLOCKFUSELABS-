import React, { useEffect, useState } from "react";
import Form from "./Form";
import Home from "./Home";
const Total = () => {
  const [tasks, setTasks] = useState([]);
  const [editTasks, setEditTasks] = useState(null);

  useEffect(() => {
    const previousTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(previousTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const AddTask = (title, desc) => {
    const newT = {
      id: Date.now(),
      title,
      desc,
    };
    setTasks([...tasks, newT]);
    setEditTasks(null);
  };

  const Update = (title, desc) => {
    setTasks(
      tasks.map((task) =>
        task.id === editTasks.id ? { ...task, title, desc } : task
      )
    );
    setEditTasks(null);
  };

  const deleteT = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="centered">
      {editTasks ? (
        <Form
          task={editTasks}
          onSave={Update}
          onCancel={() => setEditTasks(null)}
        />
      ) : (
        <Form
          task={null}
          onSave={AddTask}
          onCancel={() => setEditTasks(null)}
        />
      )}
      <div>
        <div className="taskheader">
          <h1>Current tasks</h1>
        </div>
        {tasks.map((task) => (
          <Home
            key={task.id}
            task={task}
            onEdit={setEditTasks}
            onDelete={deleteT}
          />
        ))}
      </div>
    </div>
  );
};

export default Total;
