import React from "react";

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskLists,
  setTaskLists,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    setTaskLists([
      ...taskLists,
      {
        id: taskLists.length,
        draggableId: `task-${taskLists.length}`,
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
