import React from "react";

export const Task = ({ task, taskLists, setTaskLists }) => {
  const handleDelete = (id) => {
    setTaskLists(taskLists.filter((task) => task.id !== id));
  };
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
        削除
      </button>
    </div>
  );
};

export default Task;
