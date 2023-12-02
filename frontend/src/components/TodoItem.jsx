import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, handleToggle, handleDelete }) => {
  const { id, text, completed } = todo;

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleToggle(id)}
      />
      <span>{text}</span>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }),
  handleToggle: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default TodoItem;
