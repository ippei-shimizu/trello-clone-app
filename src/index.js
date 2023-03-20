import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable draggableId="item0" index={0}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    item0
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
