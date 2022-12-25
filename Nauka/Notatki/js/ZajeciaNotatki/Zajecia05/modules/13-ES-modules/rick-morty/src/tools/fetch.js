import { characters, locations  } from "../../index.js";



export const fetchCharacter = fetch("https://rickandmortyapi.com/api/character")
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

  export const fetchLocation = fetch("https://rickandmortyapi.com/api/location")
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