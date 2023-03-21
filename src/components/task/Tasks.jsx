import React from "react";
import Task from "./Task";

export const Tasks = ({ taskLists, setTaskLists }) => {
  return (
    <div>
      {taskLists.map((task) => {
        return (
          <div key={task.id}>
            <Task
              task={task}
              taskLists={taskLists}
              setTaskLists={setTaskLists}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
