import React, { Suspense, useEffect, useState } from "react";

import TodoList from "./components/TodoList";
import { getAllTodo } from "./apis/TodoAPI";
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

  const handleAddTodo = (todo) => {
    const modTodo = { ...todo, id: Math.random() };
    setTodoList((prevTodoList) => [...prevTodoList, modTodo]);
  };

  const handleUpdate = (id, modTodo) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => (todo.id === id ? modTodo : todo))
    );
  };

  const handleDelete = (id) => {
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
