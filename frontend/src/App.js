import React, { Suspense, useEffect, useState } from "react";

import TodoList from "./components/TodoList";
import { createTodo, deleteTodo, getAllTodo, updateTodo } from "./apis/TodoAPI";
import NewTodo from "./components/NewTodo";
import FilterTodo from "./components/FilterTodo";

function App() {
  const [allTodoList, setAllTodoList] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    const _f = async () => {
      const todoListDB = await getAllTodo();
      setAllTodoList(todoListDB);
    };
    _f();
  }, []);

  useEffect(() => {
    if (selectedStatus === "All") {
      setTodoList(allTodoList);
      return;
    }
    const filteredList = allTodoList.filter(
      (todo) => todo.status === selectedStatus
    );
    setTodoList(filteredList);
  }, [allTodoList, selectedStatus]);

  const handleAddTodo = async (todo) => {
    const resTodo = await createTodo(todo);
    if (!resTodo) return;
    setAllTodoList((prevTodoList) => [resTodo, ...prevTodoList]);
  };

  const handleUpdate = async (id, modTodo) => {
    const updatedTodo = await updateTodo(id, modTodo);
    if (!updatedTodo) return;
    setAllTodoList((prevTodoList) =>
      prevTodoList.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const handleDelete = async (id) => {
    const res = await deleteTodo(id);
    if (!res) return;
    setAllTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
    );
  };

  const handleFilterChange = (selectedStatus) => {
    setSelectedStatus(selectedStatus);
  };

  return (
    <div className="container">
      <NewTodo handleAddTodo={handleAddTodo} />
      {!!allTodoList.length && (
        <FilterTodo handleFilterChange={handleFilterChange} />
      )}
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
