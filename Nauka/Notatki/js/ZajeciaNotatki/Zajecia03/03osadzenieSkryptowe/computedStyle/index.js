// Wypisz kolory tła elementu o klasie 'box':
// - ustawionego na elemenecie
// - efektywnie wyświetlanego
const colors = document.querySelector(".box");
console.log(colors.style.backgroundColor);
console.log(window.getComputedStyle(colors).backgroundColor);
