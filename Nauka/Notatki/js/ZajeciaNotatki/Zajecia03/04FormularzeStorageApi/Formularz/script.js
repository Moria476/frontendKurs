const userForm = document.forms.userForm;

const elements = userForm.elements;
console.log(elements);

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(`${elements[0].name}: ${elements[0].value}
${elements[1].name}: ${elements[1].value}
${elements[2].name}: ${elements[2].value}
// czy takie zapisy się stosuje. Powołałem się tym co mi elements wydrukowało i odnosiłem się do elementów tablicy ?
  `);
  console.log(
    `name : ${userForm.name.value} username:${userForm.username.value} bday:${userForm.bday.value}`
  );
  const user = {
    name: userForm.name.value,
    username: userForm.username.value,
    bday: userForm.bday.value,
    isAccepting: userForm.isAccepting.checked,
  };
  console.log(user);
});

elements[3].addEventListener("click", () => {
  let addedDiv; // chyba dobra praktyką jest by nie tworzyło za kazdym razem elementu
  if (elements[3].checked === true) {
    addedDiv = document.createElement("div");

    addedDiv.innerHTML =
      "Jeżeli użytkownik akceptuje warunki, wyświetl mu dodatkową klauzule informującą o tym, że może w każdej chwili zrezygnować z umowy, jezeli nie zaznaczyl checkboxa - ukryj dodatkowa klauzule";
    userForm.append(addedDiv);
  } else {
    userForm.removeChild(addedDiv); // niestety nie chce to funkcjonować
  }
  const bodySelect = document.querySelector("body");
  console.log(bodySelect);
});
