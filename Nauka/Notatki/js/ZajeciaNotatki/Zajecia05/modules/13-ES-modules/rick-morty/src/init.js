import { fetchCharacter,  fetchLocation } from "./tools/fetch.js";
import { find} from "./tools/search.js";


export function init(title) {
  document.title = title || " domyślny tytuł";
  fetchCharacter;
  fetchLocation;
  find;
}
