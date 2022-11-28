// Policz liczbę składników w przepisie i dopisz w nawiasie do nagłówka "Składniki (?)"
const lista = document.querySelector("ul").children;
console.log(lista.length);
document.querySelector("h2").innerText = `skladniki (${lista.length})`;
