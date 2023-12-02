import React from "react";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo, i) => {
        return <TodoItem key={`todolist-${i}`} todo={todo} />;
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
};

export default TodoList;
