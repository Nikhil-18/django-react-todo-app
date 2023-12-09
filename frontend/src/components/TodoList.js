import React from "react";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

const TodoList = ({ todoList, handleUpdate, handleDelete }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {todoList.map((todo, i) => {
        return (
          <TodoItem
            key={`todolist-${i}`}
            todo={todo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.string,
    })
  ),
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default TodoList;
