import baseUrl from "./baseUrl.js";
export async function getUser(name = "Moria476") {
  const response = await fetch(`${baseUrl}/${name}`);
  const user = await response.json();
  return user;
}
