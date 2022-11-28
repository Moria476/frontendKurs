// Przenieś różowe kółko do niebieskiego pudełka
const cricleArray = document.getElementsByClassName("circle");
const circle = cricleArray[0];
const boxBlue = document.querySelector(".blue");
circle.remove();
boxBlue.appendChild(circle);
