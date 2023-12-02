import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo, i) => {
        return <li key={`todolist-${i}`}>{todo.text}</li>;
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
