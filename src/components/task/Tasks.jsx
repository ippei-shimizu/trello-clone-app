import React from "react";

export const Tasks = ({ inputText, taskLists }) => {
  return (
    <div>
      {taskLists.map((task, index) => {
        return <p key={index}>{task.text}</p>;
      })}
    </div>
  );
};

export default Tasks;
