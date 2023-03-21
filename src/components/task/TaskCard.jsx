import React, { useState } from "react";
import TaskCardDeleteBtn from "./button/TaskCardDeleteBtn";
import TaskAddInput from "./input/TaskAddInput";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";

export const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskLists, setTaskLists] = useState([]);

  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteBtn />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskLists={taskLists}
        setTaskLists={setTaskLists}
      />
      <Tasks
        inputText={inputText}
        taskLists={taskLists}
        setTaskLists={setTaskLists}
      />
    </div>
  );
};

export default TaskCard;
