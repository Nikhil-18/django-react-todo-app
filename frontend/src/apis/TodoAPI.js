const TASKS_URL = "/api/tasks/";

function getCookie() {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; csrftoken=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export const getAllTodo = async () => {
  try {
    const res = await fetch(TASKS_URL);
    if (!res.ok) return [];
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.log("Error in fetching all tasks:", error);
    return [];
  }
};

export const createTodo = async (todo) => {
  const token = getCookie();
  try {
    const res = await fetch(TASKS_URL, {
      method: "POST",
      headers: {
        "X-CSRFToken": token,
      },
      body: todo,
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.log("Error in creating task:", error);
    return null;
  }
};

export const updateTodo = async (id, updatedTodo) => {
  const token = getCookie();
  try {
    const res = await fetch(`${TASKS_URL}/${id}/`, {
      method: "POST",
      headers: {
        "X-CSRFToken": token,
      },
      body: updatedTodo,
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.log("Error in updating task:", error);
    return null;
  }
};

export const deleteTodo = async (id) => {
  const token = getCookie();
  try {
    const res = await fetch(`${TASKS_URL}/${id}/`, {
      method: "DELETE",
      headers: {
        "X-CSRFToken": token,
      },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.log("Error in deleting task:", error);
    return null;
  }
};
