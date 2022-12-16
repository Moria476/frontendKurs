import mockData from "./data/mockData.json" assert { type: "json" };

let cursor = -1;
const size = 10;

function delay(time) {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}

async function apiData() {
  await delay(1000);
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong");
  }
  cursor += 1;
  const start = cursor * size;
  const end = cursor * size + size;
  return mockData.slice(start, end);
}

const list = document.createElement("ul");
document.body.appendChild(list);

const fetchData = () => {
  return apiData()
    .then((response) => {
      response.forEach((user) => {
        const listLi = document.createElement("li");
        listLi.classList.add("person-info");
        listLi.textContent = user.firstNameLastName;
        list.appendChild(listLi);
      });
    })
    .catch((error) => {
      console.error(error);
      const errorMsg = document.createElement("div");
      errorMsg.innerText = "Coś poszło nie tak";
      document.body.appendChild(errorMsg);
    });
};

const button = document.createElement("button");
button.innerText = "Load More";
document.body.appendChild(button);
button.addEventListener("click", fetchData);

window.addEventListener("DOMContentLoaded", fetchData);
