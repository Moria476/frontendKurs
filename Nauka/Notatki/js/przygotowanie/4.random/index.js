/*
let person = {
  name: "Arkadiusz",
  age: 28,
  country: "Poland",
};
function logData() {
  personString =
    person.name +
    " is  " +
    person.age +
    " years old and lives in " +
    person.country;
  console.log(personString);
}

logData();
*/
let hands = ["rock", "paper", "scissor"];
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const rndInt = randomIntFromInterval(0, 2);
console.log(rndInt);

for (let i = 0; i < hands.length; i++) {
  if (i === rndInt) {
    console.log(hands[i]);
  }
}

function getHand() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}
console.log(getHand());
