import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, handleUpdate, handleDelete }) => {
  const { id, title, description, status } = todo;

  const [selectedStatus, setSelectedStatus] = useState(status);

  let borderColor = "";
  if (status === "In Progress") {
    borderColor = "border-info";
  } else if (status === "Done") {
    borderColor = "border-success";
  }

  const headerColor = status === "Done" ? "text-success" : "";

  const handleOptionChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleUpdateButton = () => {
    if (status === selectedStatus) return;
    const modTodo = { title, description, status: selectedStatus };
    handleUpdate(id, modTodo);
  };

  return (
    <div className="col">
      <div className={`card ${borderColor}`}>
        <div className="card-body">
          <h5 className={`card-title ${headerColor}`}>{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex flex-row bd-highlight justify-content-between">
            <div className="row">
              <div className="col">
                <select
                  name="status"
                  className="form-select"
                  onChange={handleOptionChange}
                  id="validationCustom04"
                  required
                  // defaultValue={status}
                  value={selectedStatus}
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <div className="col">
                <button
                  className="btn btn-warning"
                  onClick={handleUpdateButton}
                >
                  Update
                </button>
              </div>
            </div>
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
