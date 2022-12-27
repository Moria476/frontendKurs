1. uwtorzenie folderu pages a w nim characters.js
   import baseUrl from "../utils/baseUrl.js";
   async function getCharacters() {
   const response = await fetch(`${baseUrl}/character`);
   const characters = await response.json();
   return characters.results;
   }

2. w characters chcemy wyeksportowac getcharacters
   export default async function Characters() {
   const characters = await getCharacters();
   console.log(characters);
   }
3. w router.js
   import Characters from "./pages/characters.js";
   { path: "/", page: Characters },

4. utworzyc folder components , w nim folder characters , a pozniej CharacterCard(komponenty z duzej litery)
5. w CharacterCard utworzyć funkcje export default function CharacterCard(character){} ktora bedzie zwracac kartę
   kod z bootstrapa z album poprzez kod zrodlowy
   return ` <div class="col">
   <div class="card shadow-sm">
   <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
   <div class="card-body">
   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   <div class="d-flex justify-content-between align-items-center">
   <div class="btn-group">
   <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
   <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
   </div>
   <small class="text-muted">9 mins</small>
   </div>
   </div>
   </div>
     </div>`
6. utworzyć characterlist a w nim
   import view from "../../utils/view.js";
   import CharacterCard from "./CharacterCard.js";
   export default function CharacterList() {
   return view.innerHTML = `<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">${CharacterCard()}</div>`);
   }
7. w character chcemy wyswietlic characterlist
   import CharacterList from "../components/characters/CharacterList.js";
   export default async function Characters() {
   const characters = await getCharacters();
   CharacterList();
   }
8. dodać do funkcji CharacterList(characters);

import CharacterList from "../components/characters/CharacterList.js";
export default async function Characters() {
const characters = await getCharacters();
CharacterList(characters);
}

a w characterlist
export default function CharacterList(characters) {
return view.innerHTML = `<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">${characters.map(character) => {CharacterCard(character).join("")}}</div>`);
}

9. dynamicznie przekazac parametry character do CharacterCard

export default function CharacterCard(character){
return ` <div class="col">

   <div class="card shadow-sm">
   <img src=${character.image} class="bd-placeholder-img card-img-top" width="100%" height="225" />
   <div class="card-body">
   <h2 class="card-text">${character.name}</h2>
   <div class="d-flex justify-content-between align-items-center">
   <div class="btn-group">
   <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
   <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
   </div>
   <small class="text-muted">9 mins</small>
   </div>
   </div>
   </div>
     </div>`
     }

10. stworzyć folder w komponentach do obrazkow buttonow itp jako UI i utworzyc w nim Image.js
    export function Image(source) {
    return `<img src=${source} class="bd-placeholder-img card-img-top" width="100%" height="225"/>`;
    }
11. w characterCard cchcemy zaimportowac Image.js
    import { Image } from "../ui/Image.js";

export default function CharacterCard(character){
return ` <div class="col">

   <div class="card shadow-sm">
   ${Image(character.image)}
   <div class="card-body">
   <h2 class="card-text">${character.name}</h2>
   <div class="d-flex justify-content-between align-items-center">
   <div class="btn-group">
   <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
   <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
   </div>
   <small class="text-muted">9 mins</small>
   </div>
   </div>
   </div>
     </div>`
     }

12. chcemy utworzyc nowa strone dla postaci po jej kliknieciu. Tworzymy w pages singleCharacter
    import baseUrl from "../utils/baseUrl.js";

export default async function SingleCharacter() {

const characters = await getSingleCharacter() ;
console.log(characters);
}

async function getSingleCharacter() {
const characterId = window.location.hash.split("?id=")[1];
const response = await fetch(`${baseUrl}/character/${characterId}`);
const character = await response.json();
console.log(characterId);

return character;
}

13. zaimporotwać to do routera import SingleCharacter from "./pages/SingleCharacter.js";
    { path: "/character", page: SingleCharacter },

14. utworzyć link w characterCard do singlecharacter
    import { Image } from "../ui/Image.js";

export default function CharacterCard(character){
return ` <div class="col">

   <div class="card shadow-sm">
   ${Image(character.image)}
   <div class="card-body">
   <h2 class="card-text">${character.name}</h2>
   <div class="d-flex justify-content-between align-items-center">
   <div class="btn-group">
   <a href="#/character?id=${character.id}"><button type="button" class="btn btn-sm btn-outline-secondary">View</button>
   
   </div>
   <small class="text-muted">9 mins</small>
   </div>
   </div>
   </div>
     </div>`
     }
