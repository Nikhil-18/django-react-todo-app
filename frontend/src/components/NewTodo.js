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
        <div class="mb-3">
          <label for="titleInput" class="form-label">
            Title
          </label>
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleFormChange}
            required
            class="form-control"
            id="titleInput"
          />
        </div>
        <div class="mb-3">
          <label for="descInput" class="form-label">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleFormChange}
            class="form-control"
            id="descInput"
          />
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">
            Status
          </label>
          <select
            name="status"
            class="form-select"
            onChange={handleFormChange}
            id="validationCustom04"
            required
          >
            <option selected value="To Do">
              To Do
            </option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>

        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="submit" class="btn btn-primary my-3">
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
