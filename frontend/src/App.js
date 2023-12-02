import React, { useEffect, useState } from "react";

import TodoList from "./components/TodoList";
import { getAllTodo } from "./apis/TodoAPI";
import NewTodo from "./components/NewTodo";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(() => getAllTodo());
  }, []);

  const handleAddTodo = (todo) => {
    const modTodo = { ...todo, completed: false, id: Math.random() };
    setTodoList((prevTodoList) => [...prevTodoList, modTodo]);
  };

  const handleToggle = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
    );
  };

  return (
    <div className="App">
      <NewTodo handleAddTodo={handleAddTodo} />
      <TodoList
        todoList={todoList}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
