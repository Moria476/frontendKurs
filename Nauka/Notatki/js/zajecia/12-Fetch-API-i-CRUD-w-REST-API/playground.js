// const fetchTodos = () => {
//   fetch("http://localhost:3000/todos")
//     .then((response) => response.json())
//     .then((todos) => console.log(todos));
// };
// const fetchTodo = (id) => {
//   id = 1;
//   fetch(`http://localhost:3000/todos/${id}`)
//     .then((response) => response.json())
//     .then((todo) => console.log(todo));
// };
// fetchTodos();
// fetchTodo(1);
// fetchTodo(2);
// fetchTodo(50);

const addTodos = (action) => {
  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ action }),
  })
    .then((response) => response.json())
    .then((todos) => console.log(todos));
};
//addTodos("lubie placki");
const updateTodos = (id, action) => {
  fetch(`http://localhost:3000/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ action }),
  }).then((response) => {
    if (response.ok) {
      console.log("ok");
    }
  });
};
//updateTodos(1, "bardzo lubie placki1");
const removeTodos = (id) => {
  fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      console.log("ok");
    }
  });
};
//removeTodos(5);
