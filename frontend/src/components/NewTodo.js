import React, { useState } from "react";
import PropTypes from "prop-types";

const NewTodo = ({ handleAddTodo }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(formData)
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name="title"
        type="text"
        value={formData.title}
        onChange={handleFormChange}
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleFormChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

NewTodo.propTypes = {
  handleAddTodo: PropTypes.func,
};

export default NewTodo;
