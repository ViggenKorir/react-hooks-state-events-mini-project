import React from "react";

const Task = ({ text, category, onDeleteTask }) => {
  return (
    <div className="task">
      <span className="label">{category}</span>
      <span className="text">{text}</span>
      <DeleteButton onClick={() => onDeleteTask(text)} />
    </div>
  );
};

const DeleteButton = ({ onClick }) => (
  <button className="delete" onClick={onClick}>
    X
  </button>
);

export default Task;
