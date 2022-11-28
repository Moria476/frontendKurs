// console.log("OK");
const header = document.getElementById("header");
console.log(header);
header.classList.add("header");
header.innerText = "I am a heading";

const wrapperBody = document.querySelector("body");
const listItems = ["a", "b", "c", "d"];
const listOl = document.createElement("ol");
listItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.innerText = item;
  listOl.append(listItem);
});
wrapperBody.append(listOl);

const everyLi = document.querySelectorAll("li");
everyLi.forEach((li) => {
  li.classList.add("listItem");
});

header.classList.remove("header");

header.remove();

function toggleBackgroundColor() {
  !wrapperBody.style.backgroundColor
    ? (wrapperBody.style.backgroundColor = "#123123")
    : (wrapperBody.style.backgroundColor = "");
}

const button = document.createElement("button");
button.innerText = "Click me";
wrapperBody.append(button);

const handler = (event) => {
  !wrapperBody.style.backgroundColor
    ? (wrapperBody.style.backgroundColor = "#123123")
    : (wrapperBody.style.backgroundColor = "");
  console.log("event details: ", event);
};

button.addEventListener("click", handler);
