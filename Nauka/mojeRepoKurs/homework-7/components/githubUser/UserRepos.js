export function UserRepos(repos) {
  const profileLinks = document.createElement("div");
  profileLinks.classList.add("main__div__right__links");
  repos.slice(-10).forEach((repo) => {
    const link = document.createElement("a");
    link.href = repo.html_url;
    link.innerHTML = repo.name;
    profileLinks.appendChild(link);
  });
  return profileLinks;
}
