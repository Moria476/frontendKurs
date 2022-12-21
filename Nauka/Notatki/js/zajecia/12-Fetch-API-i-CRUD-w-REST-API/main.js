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
    loaderElement.className = "";
  }
};

const toast = (text) => {
  setTimeout(function () {
    toastElement.className = toastElement.className.replace("show", "");
  }, 3000);
};

// pobieranie użytkowników
const fetchCustomers = () => {
  // TODO: ściągnij dane z api, wyświetl loader i toast
  toggleLoader(true);
  fetch("http://localhost:3000/customers")
    .then((response) => {
      return response.json();
    })
    .then((customers) => {
      listCustomers(customers);
      toggleLoader(false);
      toast("Poprawnie pobrano listę użytkowników");
    });
};

const addCustomer = (name, surname) => {
  console.log("dodaje użytkownia", { name, surname });
  // TODO: dodaj użytkownika, wyświetl loader i toast
  toggleLoader(true);
  fetch("http://localhost:3000/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, surname }),
  }).then((response) => {
    if (response.ok) {
      // pobieramy listę customers jeszcze raz z nowym użytkownikiem
      fetchCustomers();
      toggleLoader(false);
      toast(`Poprawnie dodano użytkownika ${name} ${surname}`);
    }
  });
};

// TODO: zaaktualizuj użytkownika, wyświetl loader i toast
// name = 'Adam', surname = 'Kowalski'  oznacza że jeśli nie podamy name i surname to
// Adam Kowalski będzie domyślnymi parametrami
const updateCustomer = (id, name = "Adam", surname = "Kowalski") => {
  toggleLoader(true);
  fetch(`http://localhost:3000/customers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, surname }),
  }).then((response) => {
    if (response.ok) {
      // pobieramy listę customers jeszcze raz z zaaktualizowanym użytkownikiem
      fetchCustomers();
      toggleLoader(false);
      toast(`Poprawnie zaaktualizowano użytkownika ${name} ${surname}`);
    }
  });
};

const removeCustomer = (id) => {
  // TODO: skasuj użytkownika, wyświetl loader i toast
  toggleLoader(true);
  fetch("http://localhost:3000/customers/" + id, {
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      fetchCustomers();
      toggleLoader(false);
      toast(`Poprawnie skasowano użytkownika ${id}`);
    }
  });
};

const customerForm = document.querySelector("#customerForm");

customerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target["name"].value;
  const surname = event.target["surname"].value;
  addCustomer(name, surname);

  event.target["name"].value = "";
  event.target["surname"].value = "";
});

// ściągnij dane po załadowaniu strony
fetchCustomers();
