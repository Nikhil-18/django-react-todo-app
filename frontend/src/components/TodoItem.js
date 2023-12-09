import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, handleUpdate, handleDelete }) => {
  const { id, title, description, status } = todo;

  let borderColor = "";
  if (status === "In Progress") {
    borderColor = "border-info";
  } else if (status === "Done") {
    borderColor = "border-success";
  }

  const headerColor = status === "Done" ? "text-success" : "";

  return (
    <div className="col">
      <div className={`card ${borderColor}`}>
        <div className="card-body">
          <h5 className={`card-title ${headerColor}`}>{title}</h5>
          <p className="card-text">{description}</p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
  }),
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default TodoItem;
