const TASKS_URL = "/api/tasks/";

export const getAllTodo = async () => {
  try {
    const res = await fetch(TASKS_URL);
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.log("Error in fetching all tasks:", error);
    return [];
  }
};
