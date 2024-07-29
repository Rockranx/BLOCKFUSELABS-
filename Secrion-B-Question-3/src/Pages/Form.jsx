import React, { useEffect, useState } from "react";

const Form = ({ task, onSave, onCancel }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  useEffect(() => {
    if (task) {
      setTaskTitle(task.title);
      setTaskDesc(task.desc);
    } else {
      setTaskTitle("");
    }
  }, [task]);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(taskTitle, taskDesc);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <span className="title">Enter Your Task</span>
        <label className="label">Title</label>
        <input
          type="text"
          id="username"
          name="username"
          className="input"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
        <label className="label">Description</label>
        <input
          id="email"
          name="email"
          required=""
          className="input"
          type="text"
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
          placeholder="Enter task title"
        />
        
        <div className="buttons">
          <button type="submit" className="submit">
            Save
          </button>
          <button type="button" onClick={onCancel} className="cancel">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
