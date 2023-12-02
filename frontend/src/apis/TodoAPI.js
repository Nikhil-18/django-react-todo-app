const fakeTodoList = [
  {
    id: 1,
    text: "todo 1",
    completed: false,
  },
  {
    id: 2,
    text: "todo 2",
    completed: false,
  },
  {
    id: 3,
    text: "todo 3",
    completed: true,
  },
];

export const getAllTodo = () => {
  return fakeTodoList;
};
