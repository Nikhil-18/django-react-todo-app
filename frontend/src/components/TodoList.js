import React from "react";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

const TodoList = ({ todoList, handleToggle, handleDelete }) => {
  return (
    <ul>
      {todoList.map((todo, i) => {
        return (
          <TodoItem
            key={`todolist-${i}`}
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
  handleToggle: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default TodoList;
