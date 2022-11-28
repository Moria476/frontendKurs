const oliwa = document.createElement("li");
oliwa.textContent = "oliwa";
const lista = document.querySelector("#caprese ul");
lista.appendChild(oliwa);

const pomidory = document.createElement("li");
pomidory.innerHTML = "pomidory";

const bazylia = document.createElement("li");
bazylia.innerHTML = "bazylia";
lista.appendChild(pomidory);
lista.appendChild(bazylia);
bazylia.style = "color:green;";

bazylia.setAttribute("src", "index.js");
bazylia.setAttribute("src", "index.js");
bazylia.removeAttribute("src", "index.js");
console.log(bazylia.hasAttribute("src", "index.js"));
const element = document.querySelector("li");
console.log(element.classList);
element.classList.add("mojaKlasa");
//element.classList.remove("mojaKlasa");
element.classList.replace("mojaKlasa", "nowaKlasa");

// Utwórz element li o treści 'pomidory' i dodaj do listy składników
