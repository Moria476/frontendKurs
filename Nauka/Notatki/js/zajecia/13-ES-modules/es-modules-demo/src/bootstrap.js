import { substract, add as dodaj } from "./tools/math.js";
import * as math from "./tools/math.js";
import giveMeDefault from "./tools/compare.js";

export function bootstrap(title) {
  document.title = title || " domyślny tytuł";
  console.log(substract(13, 2)); // 11
  console.log(dodaj(1, 5)); // 6
  console.log(math.add(1, 2)); // 3
  console.log(math.substract(10, 5)); // 5
  console.log(giveMeDefault(5, 4)); // false
  console.log(giveMeDefault(10, 10)); // true
}
