import React from "react";
import AddTaskCardButton from "./AddTaskCardButton";
import TaskCard from "./TaskCard";

export const TaskCards = () => {
  return (
    <div>
      <TaskCard />
      <AddTaskCardButton />
    </div>
  );
};

export default TaskCards;
