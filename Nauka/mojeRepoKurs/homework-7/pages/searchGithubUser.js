import UserProfileComponent from "../components/githubUser/UserProfile.js";
import { getRepos } from "../utils/getRepos.js";
import { getUser } from "../utils/getUser.js";
import view from "../utils/view.js";

export default async function startingProfile() {
  let user = await getUser();
  let repos = await getRepos();
  view.innerHTML = `
      ${UserProfileComponent(user, repos)}
    `;
}

const searchInput = document.querySelector("#search");
searchInput.addEventListener("change", async (event) => {
  event.preventDefault();
  let user = await getUser(event.target.value);
  let repos = await getRepos(event.target.value);
  view.innerHTML = `
      ${UserProfileComponent(user, repos)}
    `;
});

const form = document.querySelector("#form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (event.key === "Enter") {
    let user = await getUser(event.target.value);
    let repos = await getRepos(event.target.value);
    view.innerHTML = `
       ${UserProfileComponent(user, repos)}
     `;
  }
  searchInput.blur();
});
