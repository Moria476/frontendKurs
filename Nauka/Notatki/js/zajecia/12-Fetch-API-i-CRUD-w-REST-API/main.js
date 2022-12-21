// serwer uruchamiamy przez instalację zależności: `npm install` i `npm run start`

// 1. zaaktualizuj funkcję fetchCustomers która wywoła listCustomers
// 2. ściągnij dane po załadowaniu strony (na samym końcu kodu) - fetchCustomer()
// 3. dodaj kod do funkcji addCustomer
// 4. zaaktualizuj kod dotyczący customerForm.addEventListener("submit", (event) => {
// 5. dodaj kod do funkcji updateCustomer
// 6. dodaj kod do funkcji removeCustomer

// Ważne! Pamiętaj żeby obsłużyć też loader i toast

// wyświetlanie użytkowników
const customerList = document.querySelector("#customersList");
const listCustomers = (customers) => {
  customerList.innerHTML = "";
  customers
    .filter((customer) => {
      return customer.id && customer.name && customer.surname;
    })
    .forEach((customer) => {
      const customerElement = document.createElement("li");
      customerElement.innerHTML = `${customer.name} ${customer.surname} <button onclick="removeCustomer(${customer.id})">Usuń</button><button onclick="updateCustomer(${customer.id})">Aktualizuj</button>`;
      customerList.appendChild(customerElement);
    });
};

// wyświetlanie loader
const toggleLoader = (flag) => {
  const loaderElement = document.getElementById("loader");
  if (flag) {
    loaderElement.className = "show";
  } else {
    setTimeout(function () {
      loaderElement.className = "";
    }, 500);
  }
};

// wyświetlanie toast
const toast = (text) => {
  const toastElement = document.getElementById("snackbar");
  toastElement.innerHTML = text;
  toastElement.className = "show";
  setTimeout(function () {
    toastElement.className = toastElement.className.replace("show", "");
  }, 3000);
};

// pobieranie użytkowników
const fetchCustomers = () => {
  toggleLoader(true);
  fetch("http://localhost:3000/customers")
    .then((response) => response.json())
    .then((customers) => {
      listCustomers(customers);
      toggleLoader(false);
      toast("wyswietlono uzytkownikow");
    });
};

const addCustomer = (name, surname) => {
  console.log("dodaje użytkownia", { name, surname });
  // TODO: dodaj użytkownika, wyświetl loader i toast
};

const updateCustomer = (id, name = "test", surname = "test2") => {
  console.log("aktualizuje użytkownika użytkownia", { id, name, surname });
  // TODO: zaaktualizuj użytkownika, wyświetl loader i toast
};

const removeCustomer = (id) => {
  // TODO: skasuj użytkownika, wyświetl loader i toast
};

const customerForm = document.querySelector("#customerForm");

customerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target["name"].value; // złap wartość inputa name
  const surname = event.target["surname"].value; // złap wartość inputa surname
  addCustomer(name, surname);
  event.target["name"].value = "";
  event.target["surname"].value = "";
  // zresetuj wartości w formularzu
});

// ściągnij dane po załadowaniu strony
fetchCustomers();
