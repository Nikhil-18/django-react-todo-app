const fakeTodoList = [
  {
    id: 1,
    title: "todo 1",
    description: "Lorem ipsum",
    completed: false,
  },
  {
    id: 2,
    title: "todo 2",
    description: "Lorem ipsum",
    completed: false,
  },
  {
    id: 3,
    title: "todo 3",
    description: "Lorem ipsum",
    completed: true,
  },
];

export const getAllTodo = () => {
  return fakeTodoList;
};
