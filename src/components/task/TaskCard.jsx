import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import TaskCardDeleteBtn from "./button/TaskCardDeleteBtn";
import TaskAddInput from "./input/TaskAddInput";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";

export const TaskCard = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
  index,
}) => {
  const [inputText, setInputText] = useState("");
  const [taskLists, setTaskLists] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className="taskCardTitleAndTaskCardDeleteButtonArea"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteBtn
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
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
      )}
    </Draggable>
  );
};

export default TaskCard;
