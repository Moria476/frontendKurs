async function fetchData(name) {
  const response = await fetch(`https://api.github.com/users/${name}`);
  const user = await response.json();
  const responseRepos = await fetch(
    `https://api.github.com/users/${name}/repos`
  );
  const repos = await responseRepos.json();
  showProfile(user, repos);
}
const profileLinks = document.querySelector(".main__div__right__links");

const showProfile = async (user, repos) => {
  const profileImage = document.querySelector("#profileImage");
  const profileName = document.querySelector("#profileName");
  const profileDescription = document.querySelector("#description");
  const profileFollowers = document.querySelector("#numberFollowers");
  const profileFollowing = document.querySelector("#numberFollowing");
  const profileRepos = document.querySelector("#numberRepos");
  for (i = 0; i < repos.length && i < 10; i++) {
    const link = document.createElement("a");
    link.href = `${repos[i].html_url}`;
    link.innerHTML = repos[i].name;
    profileLinks.append(link);
  }
  profileImage.src = user.avatar_url;
  profileName.innerHTML = user.name;
  if (!user.bio === null) {
    profileDescription.innerHTML = user.bio;
  }
  profileFollowers.innerHTML = user.followers;
  profileFollowing.innerHTML = user.following;
  profileRepos.innerHTML = user.public_repos;
};
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
const searchInput = document.querySelector("#search");
searchInput.addEventListener("change", (event) => {
  event.preventDefault();
  removeAllChildNodes(profileLinks);
  fetchData(event.target.value);
});
const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.key === "Enter") {
    removeAllChildNodes(profileLinks);
    fetchData(event.target.value);
  }
  searchInput.blur();
});
