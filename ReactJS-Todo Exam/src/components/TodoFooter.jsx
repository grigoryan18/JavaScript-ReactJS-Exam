import React from "react";

export default function TodoFooter({ todos, setTodos, handleClear }) {
  const completed = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div>
      <span>
        {completed}/{todos.length}
      </span>
      <span onClick={handleClear}>Clear All Completed</span>
    </div>
  );
}
