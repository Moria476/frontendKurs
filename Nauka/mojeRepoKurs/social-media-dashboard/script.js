const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
});
