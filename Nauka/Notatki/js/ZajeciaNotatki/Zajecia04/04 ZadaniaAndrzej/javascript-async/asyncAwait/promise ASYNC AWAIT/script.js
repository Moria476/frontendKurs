const go = document.querySelector(".go");

function wait(ms = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}

// // Promise land
// function animate(event) {
//   const element = event.currentTarget;
//   // 1. Change the text to GO when clicked
//   element.textContent = "GO!";
//   // 2. Make it a circle after 2 seconds
//   wait(2000)
//     .then(() => {
//       element.classList.add("circle");
//       // 3. Make it red after 0.5s
//       return wait(500);
//     })
//     .then(() => {
//       element.classList.add("red");
//       // 4. Make it square again after 0.25s
//       return wait(250);
//     })
//     .then(() => {
//       element.classList.remove("circle");
//       // 5. Make it purple after 0.3s
//       return wait(300);
//     })
//     .then(() => {
//       element.classList.remove("red");
//       element.classList.add("purple");
//       // 6. Fade out after 0.5s
//       return wait(500);
//     })
//     .then(() => {
//       element.classList.add("fade");
//     })
//     .catch((error) => console.error(error));
// }
// go.addEventListener("click", animate);

// Async Await
async function animate(event) {
  const element = event.currentTarget;
  // 1. Change the text to GO when clicked
  element.textContent = "GO!";
  // 2. Make it a circle after 2 seconds
  await wait(2000);
  element.classList.add("circle");
  // 3. Make it red after 0.5s
  await wait(500);
  element.classList.add("red");
  // 4. Make it square again after 0.25s
  await wait(250);
  element.classList.remove("circle");
  // 5. Make it purple after 0.3s
  await wait(300);
  element.classList.remove("red");
  element.classList.add("purple");
  // 6. Fade out after 0.5s
  await wait(500);
  element.classList.add("fade");
}
go.addEventListener("click", animate);
