import React, { useState } from "react";
import PropTypes from "prop-types";

const NewTodo = ({ handleAddTodo }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "To Do",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(formData);
  };

  return (
    <div className="col col-md-6 mx-auto my-3">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label">
            Title
          </label>
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleFormChange}
            required
            className="form-control"
            id="titleInput"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descInput" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleFormChange}
            className="form-control"
            id="descInput"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">
            Status
          </label>
          <select
            name="status"
            className="form-select"
            onChange={handleFormChange}
            id="validationCustom04"
            required
            defaultValue="To Do"
          >
            <option value="To Do">
              To Do
            </option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

NewTodo.propTypes = {
  handleAddTodo: PropTypes.func,
};

export default NewTodo;
