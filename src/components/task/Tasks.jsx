import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const reorder = (taskLists, startIndex, endIndex) => {
  const remove = taskLists.splice(startIndex, 1);
  taskLists.splice(endIndex, 0, remove[0]);
};

export const Tasks = ({ taskLists, setTaskLists }) => {
  const handleDragEnd = (result) => {
    reorder(taskLists, result.source.index, result.destination.index);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskLists.map((task, index) => {
                return (
                  <div key={task.id}>
                    <Task
                      index={index}
                      task={task}
                      taskLists={taskLists}
                      setTaskLists={setTaskLists}
                    />
                  </div>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
