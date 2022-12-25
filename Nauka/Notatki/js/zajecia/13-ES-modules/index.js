// list state
let characters = [];
let locations = [];

// const locationsList = document.getElementById('locationsList')

document;

// handling search input
search.addEventListener("input", () => {
  charactersList.innerHTML = "";

  characters
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(search.value.toLowerCase().trim());
    })
    .forEach((character) => {
      const characterEl = document.createElement("li");
      const characterNameEl = document.createElement("span");

      characterEl.append(characterNameEl);

      characterNameEl.append(document.createTextNode(character.name));

      charactersList.append(characterEl);
    });

  locationsList.innerHTML = "";

  locations
    .filter((location) =>
      location.name.toLowerCase().includes(search.value.toLowerCase().trim())
    )
    .forEach((location) => {
      const locationEl = document.createElement("li");
      const locationNameEl = document.createElement("span");

      locationEl.append(locationNameEl);

      locationNameEl.append(document.createTextNode(location.name));

      locationsList.append(locationEl);
    });
});

//fetch data
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((charactersResponse) => {
    characters = charactersResponse.results;

    charactersResponse.results.forEach((character) => {
      const characterEl = document.createElement("li");
      const characterNameEl = document.createElement("span");

      characterEl.append(characterNameEl);

      characterNameEl.append(document.createTextNode(character.name));

      charactersList.append(characterEl);
    });
  });

fetch("https://rickandmortyapi.com/api/location")
  .then((res) => res.json())
  .then((locationsResponse) => {
    locations = locationsResponse.results;

    locationsResponse.results.forEach((location) => {
      const locationEl = document.createElement("li");
      const locationNameEl = document.createElement("span");

      locationEl.append(locationNameEl);

      locationNameEl.append(document.createTextNode(location.name));

      locationsList.append(locationEl);
    });
  });
