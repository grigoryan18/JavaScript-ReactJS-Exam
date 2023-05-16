import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleChecked, handleDelete }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo?.id}
            todo={todo}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}
