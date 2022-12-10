//zadanie 1

// setTimeout(() => {
//   console.log("Jan")
// }, 10000);


// zadanie 2

// const cars = ['bmw'];
//
// console.log(cars);
//
// cars.push('mercedes');
//
// console.log(cars);
//
// const sayCarsLength = (cars) => {
//   console.log(cars.length)
// }
//
// setTimeout(() => {
//   cars.push('audi');
//   console.log("Po 5 sekundach: ", cars)
//   sayCarsLength(cars)
// }, 5000);
//
//
// console.log(cars);

// Zadanie 3

// let seconds = 0
//
// setInterval(() => {
//   console.log(`User jest na stronie: ${seconds++} sekund`);
// }, 1000)


// Zadanie 4

// const timeoutId = setTimeout(() => {
//   console.log("Jan")
// }, 5000);
//
// setTimeout(() => {
//   console.log('CZYSZCZE timeId', timeoutId)
//   clearTimeout(timeoutId);
// }, 2000)
//

// Zadanie 5

const intervalId = setInterval(() => {
  console.log("Ala ma kota!")
}, 1000);

document.querySelector('#button')
  .addEventListener('click', () => {
    clearInterval(intervalId)
})


// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);



// Zadanie 6

