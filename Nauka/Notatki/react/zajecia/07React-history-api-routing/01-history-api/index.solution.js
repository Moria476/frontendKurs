function highlightCurrentMenu() {
  const path = window.location.pathname;
  console.log(path);
  document
    .querySelector("#menu-home")
    .classList.toggle("menu-item__active", path === "/");
  document
    .querySelector("#menu-books")
    .classList.toggle("menu-item__active", path === "/books");
  document
    .querySelector("#menu-users")
    .classList.toggle("menu-item__active", path === "/users");
  document
    .querySelector("#menu-invitations")
    .classList.toggle("menu-item__active", path === "/users/invitations");
}
highlightCurrentMenu();

const menus = [...document.querySelectorAll(".menu-item")];

menus.forEach((element) =>
  element.addEventListener("click", function (event) {
    event.preventDefault();

    window.history.pushState(null, null, element.href);
    highlightCurrentMenu();
  })
);

window.addEventListener("popstate", (event) => {
  console.log(event);
  highlightCurrentMenu();
});
