import React from "react";
import TaskCardDeleteBtn from "./button/TaskCardDeleteBtn";
import TaskAddInput from "./input/TaskAddInput";
import TaskCardTitle from "./TaskCardTitle";

export const TaskCard = () => {
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteBtn />
      <TaskAddInput />
    </div>
  );
};

export default TaskCard;
