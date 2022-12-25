# JavaScript - ES modules

---

Kamil Wojkowski, JavaScript developer, Mentor IT w Envelo [wojkowski.kamil@gmail.com](mailto:wojkowski.kamil@gmail.com)

**Co dzisiaj?**

- jaki problem rozwiązują moduły?
- ES Modules vs CommonJS
- tworzymy projekt npm
- korzystanie z zasobów npm (wykorzystanie gotowych rozwiązań i tworzenie własnych)

[JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) w zasobach mdn

// javascript.info
// kursjs.pl

---

## Dlaczego warto korzystać z modułów?

<img width="700px" src="https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/article_show_cover/7m/22428951-plan-mieszkania.jpeg">

- reużywalność kodu
- izolacja kodu
- organizacja struktury danych i logiki aplikacji
- używanie zewnętrznych/wewnętrznych paczek/zależności

---

## Moduły w JS

### ES Modules

```javascript
// add.js
export const add = (a, b) => {
	return a + b;
};

// index.js
import { add } from "./add.js";

console.log(add(1, 2)); // 3
```

---

### CommonJS

```javascript
// add.js
module.exports.add = (a, b) => {
	return a + b;
};

// index.js
const { add } = require("./add.js");

console.log(add(1, 2)); // 3
```

---

## ES Modules in depth!

```javascript
// add.js
export const add = (a, b) => {
	return a + b;
};

export const substract = (a, b) => {
	return a - b;
};

const divide = (a, b) => {
	return a / b;
};

const compare = () => {
	return a === b;
};

export default compare;
```

```javascript
// index.js
import { divide } from "./add.js"; // error!
import { substract, add as dodaj } from "./add.js";
import * as math from "./add.js";
import giveMeDefault from "./add.js";

console.log(substract(13, 2)); // 11
console.log(dodaj(1, 5)); // 6
console.log(math.add(1, 2)); // 3
console.log(math.substract(10, 5)); // 5
console.log(math.default(5, 4)); // false
console.log(giveMeDefault(10, 10)); // true
```

---

## package.json oraz package-lock.json

By utworzyć package.json wejdź do swojego katologu, otwórz terminal i wpisz `npm init` a następnie wypełnij uruchomiony kreator

Podstawowa struktura package.json

```json
{
	"name": "my-project", // nazwa projektu, unikalna jeśli chcemy publikować nasz projekt na npm
	"version": "1.0.0", // aktualna wersja (major, minor, patch)
	"description": "some desc", // opis projektu
	"main": "index.js", // wejściowy plik do aplikacji
	"scripts": {
		// lista skryptów możliwa do uruchomienia za pomocą polecania npm run <nazwa skryptu>
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "", // autor projektu
	"license": "ISC" // licencja
}
```

`package-lock.json` pozwala nam na synchronizację i dokładną informację wersji zależności zainstalowanych w projekcie

---

### Przykład użycia zewnętrznej biblioteki

1. zainstaluj paczkę [nanoid](https://www.npmjs.com/package/nanoid) w katalogu z package.json - `npm install nanoid`

- dependecy vs devDependency

2. Zaimportuj na podstawie dokumentacji jedną z funkcji znajdujących się w paczce

---

## Własne paczki

Publikowanie własnych paczek na [npmjs.com](https://www.npmjs.com/)

`npm adduser` - logujemy się jako użytkownik npmjs.org

`npm publish` - publikujemy paczkę na npmjs.org

`npm version patch|minor|major` - podbijanie wersji

---

### dobre praktyki

- kieruj się zasadą pojedynczej odpowiedzialności przy tworzeniu modułów (S z SOLID)
- wystawiaj na zewnątrz tylko to co jest niezbędne (hermetyzacja)
- unikaj tworzenia modułów-worków
- wydzielaj moduły podczas pracy z kodem, trudno na początku przewidzieć strukturę twojej aplikacji

mje notatki
modules do gitignore
npm ci - do aktualizacji wersji
npm install -D - instaluje jako Devdependencies - robi sie to po to gdy paczka nie ma wplywu na działanie aplikacji
folder node_modules pojawia sie po instalacji - npm instal nanoid
