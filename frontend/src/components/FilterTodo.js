const FilterTodo = ({ handleFilterChange }) => {
  return (
    <div className="row justify-content-end my-2">
      <label htmlFor="filter" className="col-auto col-form-label">
        Filter by Status:
      </label>
      <div className="col-auto">
        <select
          id="filter"
          className="form-select"
          defaultValue="All"
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
    </div>
  );
};

export default FilterTodo;
