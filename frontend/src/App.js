import React, { Suspense, useEffect, useState } from "react";

import TodoList from "./components/TodoList";
import { createTodo, deleteTodo, getAllTodo, updateTodo } from "./apis/TodoAPI";
import NewTodo from "./components/NewTodo";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const _f = async () => {
      const todoListDB = await getAllTodo();
      setTodoList(todoListDB);
    };
    _f();
  }, []);

  const handleAddTodo = async (todo) => {
    const resTodo = await createTodo(todo);
    if (!resTodo) return;
    setTodoList((prevTodoList) => [resTodo, ...prevTodoList]);
  };

  const handleUpdate = async (id, modTodo) => {
    const updatedTodo = await updateTodo(id, modTodo);
    if (!updatedTodo) return;
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const handleDelete = async (id) => {
    const res = await deleteTodo(id);
    if (!res) return;
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
    );
  };

  return (
    <div className="container">
      <NewTodo handleAddTodo={handleAddTodo} />
      <Suspense>
        <TodoList
          todoList={todoList}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </Suspense>
    </div>
  );
}

export default App;
