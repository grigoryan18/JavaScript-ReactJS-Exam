import React from "react";

export default function TodoItem({ todo, handleChecked, handleDelete }) {
  return (
    <div>
      <input
        type="checkbox"
        id={todo?.text}
        checked={todo?.isCompleted}
        onChange={(e) =>
          handleChecked({ ...todo, isCompleted: e.target.checked })
        }
      />
      <label htmlFor={todo?.text}>{todo.text}</label>
      <button onClick={() => handleDelete(todo?.id)}>X</button>
    </div>
  );
}
