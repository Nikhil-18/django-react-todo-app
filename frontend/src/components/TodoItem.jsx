import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo }) => {
  const { id, text, completed } = todo;

  return (
    <div>
      <input type="checkbox" checked={completed} readOnly />
      <span>{text}</span>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

export default TodoItem;
