import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoFooter from "./components/TodoFooter";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Listening",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Reading",
      isCompleted: false,
    },
  ]);

  const handleCreate = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random(),
        text: input,
        isCompleted: false,
      },
    ]);
    setInput("");
  };

  const handleDelete = (item) =>
    setTodos(todos.filter((todo) => todo?.id !== item));

  const handleChecked = (newTodo) => {
    setTodos(todos.map((todo) => (todo?.id === newTodo?.id ? newTodo : todo)));
  };

  const handleClear = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  return (
    <div>
      <TodoForm input={input} setInput={setInput} handleCreate={handleCreate} />
      <TodoList
        todos={todos}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <TodoFooter todos={todos} setTodos={setTodos} handleClear={handleClear} />
    </div>
  );
}
