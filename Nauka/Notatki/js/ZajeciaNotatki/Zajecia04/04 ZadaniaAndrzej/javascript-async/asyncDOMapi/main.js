const container = document.querySelector("[data-container]");
console.log(container);

const createToast = () => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = "InfoShare Academy!";
  return toast;
};

const display = (toast) => {
  container.prepend(toast);
};

const deleteToast = (toast) => {
  setTimeout(() => {
    container.removeChild(toast);
  }, 1500);
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const toast = createToast();
  display(toast);
  deleteToast(toast);
});
