import React, { useEffect, useState } from "react";

import TodoList from "./components/TodoList";
import { getAllTodo } from "./apis/TodoAPI";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(getAllTodo());
  }, []);

  return (
    <div className="App">
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
