const button = document.querySelector("#darkModeButton");

const turnOnDarkMode = () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "grey";
};

button.addEventListener("click", () => {
  turnOnDarkMode();
  localStorage.setItem("theme", "grey");
});
const initPage = () => {
  const theme = localStorage.getItem("theme");

  if (theme) {
    turnOnDarkMode();
  }
  console.log(theme);
};

initPage();
