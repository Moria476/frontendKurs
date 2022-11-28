const users = [
  {
    id: 123,
    name: "Maciej",
    lastName: "Mikulski",
    avatarUrl: "http://vatars.com/mikulski.png",
  },
];

const createAvatar = (person) => {
  const avatar = document.createElement("div");
  avatar.setAttribute("class", "avatar");
  avatar.setAttribute("id", person.id);

  const name = document.createElement("span");
  name.innerText = person.name;
  const lastName = document.createElement("span");
  lastName.innerText = lastName.name;

  avatar.appendChild(name);
  avatar.appendChild(lastName);
};
const wrapper = document.getElementById("wrapper");
avatars.forEach((person) => {
  wrapper.appendChild(createAvatar(person));
});
