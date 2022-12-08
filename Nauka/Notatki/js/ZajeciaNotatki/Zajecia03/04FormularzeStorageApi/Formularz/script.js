const userForm = document.forms.userForm;

const elements = userForm.elements;
console.log(elements);

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(`${elements[0].name}: ${elements[0].value}
${elements[1].name}: ${elements[1].value}
${elements[2].name}: ${elements[2].value}

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



document.querySelector('#isAccepting').addEventListener('change', (event) =>{
  if(event.target.checked){
    const acceptingMessage = document.createElement('div')
    acceptingMessage.innerText="Jeżeli użytkownik akceptuje warunki, wyświetl mu dodatkową klauzule informującą o tym, że może w każdej chwili zrezygnować z umowy, jezeli nie zaznaczyl checkboxa - ukryj dodatkowa klauzule"
    acceptingMessage.id = 'acceptMessage'
    userForm.append(acceptingMessage);
  }else{
    document.querySelector('#acceptMessage').remove();
  }
})
