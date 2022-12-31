async function fetchData(name) {
  const response = await fetch(`https://api.github.com/users/${name}`);
  const user = await response.json();
  //console.log(user);
  showProfile(user, name);
}

const showProfile = async (user, name) => {
  const profileImage = document.querySelector("#profileImage");
  const profileName = document.querySelector("#profileName");
  const profileDescription = document.querySelector("#description");
  const profileFollowers = document.querySelector("#numberFollowers");
  const profileFollowing = document.querySelector("#numberFollowing");
  const profileRepos = document.querySelector("#numberRepos");
  const profileLinks = document.querySelector(".main__div__right__links");
  const response = await fetch(`https://api.github.com/users/${name}/repos`);
  const repos = await response.json();

  for (i = 0, j = 0; i < repos.length && j < 10; i++, j++) {
    console.log(repos[i]);
    const link = document.createElement("a");
    link.href = `${repos[i].html_url}`;
    console.log(repos[i].html_url);
    link.innerHTML = repos[i].name;
    console.log(repos[i].name);
    profileLinks.append(link);
  }

  profileImage.src = user.avatar_url;
  profileName.innerHTML = user.name;
  if (user.bio === null) {
    profileDescription.innerHTML = "Description not provided";
  } else {
    profileDescription.innerHTML = user.bio;
  }
  profileFollowers.innerHTML = user.followers;
  profileFollowing.innerHTML = user.following;
  profileRepos.innerHTML = user.public_repos;
};

fetchData("gaearon");
