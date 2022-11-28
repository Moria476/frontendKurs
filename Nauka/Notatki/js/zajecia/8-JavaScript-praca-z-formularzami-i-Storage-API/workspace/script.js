//Obiekt -> string
const userString = JSON.stringify({ name: "jan" });

localStorage.setItem("myNewUser", userString);

// odczyt
//userFromLocalStorage jest typu string
const userFromLocalStorage = localStorage.getItem("myNewUser");
console.log(userFromLocalStorage);

//String -> obiekt
//userObject jest już typu object
const userObject = JSON.parse(userFromLocalStorage);

console.log(userObject);
console.log(userObject.name);

localStorage.removeItem("myNewUser");
