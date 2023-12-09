const fakeTodoList = [
  {
    id: 1,
    title: "todo 1",
    description: "Lorem ipsum",
    status: "To Do",
  },
  {
    id: 2,
    title: "todo 2",
    description: "Lorem ipsum",
    status: "In Progress",
  },
  {
    id: 3,
    title: "todo 3",
    description: "Lorem ipsum",
    status: "Done",
  },
];

export const getAllTodo = () => {
  return fakeTodoList;
};
