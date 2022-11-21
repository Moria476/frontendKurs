let countSave = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
  count = count + 1;
  countEl.textContent = count;
}
function save() {
  let countStr = count + " - ";
  countSave.textContent = countSave.textContent + countStr;
  countEl.textContent = 0;
  count = 0;
}

let firstName = "Arek";
let lastName = "Dudzinski";
function fullName() {
  let fullName = firstName + " " + lastName;
  console.log(fullName);
}
fullName();

let myPoints = 3;

function add3Points() {
  myPoints = myPoints + 3;
}
function remove1Point() {
  myPoints = myPoints - 1;
}
add3Points();
add3Points();
add3Points();

remove1Point();
remove1Point();
console.log(myPoints);

let errorPvar = document.getElementById("errorP");

function error() {
  errorPvar.textContent = "Something went wrong please try again later";
}
