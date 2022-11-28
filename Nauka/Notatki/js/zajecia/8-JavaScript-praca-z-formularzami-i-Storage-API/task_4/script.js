const user = {
  name: "jan",
  age: 20,
};
localStorage.setItem("user1", user); // wrzuci stringa [object object] trzeba JSON stringyfy
const userFormLS = localStorage.getItem("user1");

console.log(userFormLS);
