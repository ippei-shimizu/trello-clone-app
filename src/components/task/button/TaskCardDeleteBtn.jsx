import React from "react";

export const TaskCardDeleteBtn = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDeleteButton = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        ×
      </button>
    </div>
  );
};

export default TaskCardDeleteBtn;
