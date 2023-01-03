import UserProfileComponent from "../components/githubUser/UserProfile.js";
import baseUrl from "../utils/baseUrl.js";
import view from "../utils/view.js";


const profileLinks = document.querySelector(".main__div__right__links");

export default async function SearchGithubUser() {
  let user = null;
  let repos = null;
    user = await getUser();
    repos = await getRepos();
 
  view.innerHTML = `
      ${UserProfileComponent(user, repos)}
    `;
}

async function getUser(name ="Moria476") {
    const response = await fetch(`${baseUrl}/${name}`);
    const user = await response.json();
   return user;
  }
  async function getRepos(name="Moria476") {
    const responseRepos = await fetch(
      `${baseUrl}/${name}/repos`
    );
    const repos = await responseRepos.json();
    return repos;
  }


  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

//  const searchInput = document.querySelector("#search");
//  searchInput.addEventListener("change", (event) => {
//     event.preventDefault();
//     removeAllChildNodes(profileLinks);
//     getUser(event.target.value);
//     getRepos(event.target.value);
//   });

//   const form = document.querySelector("#form");
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     if (event.key === "Enter") {
//       removeAllChildNodes(profileLinks);
//       getUser(event.target.value);
//     getRepos(event.target.value);
//     }
//     searchInput.blur();
//   });





 
  
  
  