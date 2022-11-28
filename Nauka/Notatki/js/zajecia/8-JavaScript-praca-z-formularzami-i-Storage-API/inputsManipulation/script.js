// 1. Zareaguj na wprowadzanie danych do inputa

const secretInput = document.querySelector("#secret");
secretInput.addEventListener("change", (event) => {
  console.log(`event target value: ${event.target.value}`);
  console.log(`event details: ${event}`);
  console.log(7, "cossie zmienilo", event.target.value);
});
// 2. Na załadowanie aplikacji wypełnij inputa jakimś sekretem

secretInput.value = "nic nie umiem";
// 3. Dodaj przycisk. Pobieraj tekst z inputa na wciśnięcie tego przyciku
const checkbox = document.getElementById("is-adult");
checkbox.checked = true;

const submitBUtton = document
  //.querySelector('button[type="submit"]') ///unikac tego zapisu
  .querySelector("button")
  .addEventListener("click", () => {
    console.log(secretInput.value);
  });

const allFormsOnPage = document.forms;
console.log(allFormsOnPage.testForm); // do szukania form

const testForm = document.forms.testForm;
//console.log(testForm.elements.input.value);

testForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("on submit");
});
