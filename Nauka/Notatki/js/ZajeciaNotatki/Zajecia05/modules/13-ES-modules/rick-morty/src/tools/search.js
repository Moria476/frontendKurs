import { characters, locations, search } from "../../index.js";


export const find = search.addEventListener("input", () => {
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