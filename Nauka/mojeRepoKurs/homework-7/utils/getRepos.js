import baseUrl from "./baseUrl.js";
export async function getRepos(name = "Moria476") {
  const responseRepos = await fetch(`${baseUrl}/${name}/repos`);
  const repos = await responseRepos.json();
  return repos;
}
