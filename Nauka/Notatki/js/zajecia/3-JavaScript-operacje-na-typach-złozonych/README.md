# <a href='https://infoshareacademy.com/'><img src='https://infoshareacademy.com/wp-content/themes/infoshare/src/images/logo.svg' height='60' alt='infoShare Academy Logo' aria-label='https://infoshareacademy.com/' /></a>

## Plan Zajęć

1. Typy proste i wykorzystanie operatora `typeof`
2. Obiekty złozone, tworzenie, operacje, referencyjność
3. Tablice oraz podstawowe operacje na tablicach
4. Operator spread, typowanie, oraz błędy

## Przydatne linki

- [JavaScript Fundamentals](https://javascript.info/first-steps) - strona o podstawach JS - rozdział opisujacy fundamentalne reguły JavaScriptu
- [Objects: the basics](https://javascript.info/object-basics) - jw. rozdział traktujący o typie złozonym `Object`
- [MDN Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) - dokumentacja MDN o obiektach
- [MDN Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays) - dokumentacja MDN o tablicach
- [MDN Operator Spread / Rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) - szczegółowy artykuł dokumentacji o wykorzystaniu operatora `...`
- [Desctructurization](https://www.youtube.com/watch?v=UgEaJBz3bjY) - wideo opisujące proces destrukturyzacji w jezyku Java Script

Dodatkowe:

- [Deep copy vs shallow copy](https://medium.com/@manjuladube/understanding-deep-and-shallow-copy-in-javascript-13438bad941c) - kopiowanie obiektów w JavaScript

## Typy danych

Czym są typy danych?
Są to rodzaje podobnych do siebie danych na których wykonujemy operacje.
W JS jest 7 typów prostych oraz jeden złozony ( referencyjny )

- Typy proste w JS to:
  1. `string`
  2. `number`
  3. `bigint`
  4. `bool`
  5. `undefined`
  6. `null`
  7. `Symbol()`
- Typ złożony w JS to `object`.

## Operator `typeof`

Operator `typeof` - zwraca typ wartości jako `string`. Operator `typeof` używa się na jeden z dwóch sposobów:

1. `typeof operand`
2. `typeof (operand)`

```javascript
const number = 1;
typeof number; // "number"

typeof 0 / 0; // "number" (rezulatem działania jest NaN)
typeof Infinity; // "number"

const isPremiumUser = true;
typeof isPremiumUser; // "boolean"

const name = "John Doe";
typeof name; // "string"

let notDefined;
typeof notDefined; // "undefined"

const nullValue = null;
typeof nullValue; // "object" ?!?!?!

const symbol = Symbol("sym");
typeof symbol; // "symbol"

function testFunction() {}
typeof testFunction; // "function" ?!?!
```

### Wazne

- dla operatora `typeof null` wartoscia zwracaną jest `object`. Jest to błąd operatora typeof ( zaszłość języka JS, potrzeba utrzymania kompatybilności wstecznej ). Jest to specjalna wartość posiadająca własny, odrębny typ. **Zachowanie `typeof` jest tutaj błędne.**
- dla operatora `typeof testFunction` wartością zwracaną jest `function`. Nie ma jednak w JavaScript osobnego typu `function`, a funkcje tez są typu `object`. W tym wypadku równiez wynika to z niedoskonałości przeszłości języka JavaScript

# Obiekty

- obiektami nazywamy zestaw właściwości które składają się z klucza i wartości oraz metod ( funkcji ).
- kazda z wlasnoci obiektu zamknięta jest w klamrach, natomiast sam klucz od wartości oddzielamy znakiem dwukropka.
- Poszczególne właściwości definiowanego obiektu oddzielone są znakiem przecinka

```js
const obj = {
  foo: 1,
  bar: "baz",
};
typeof obj; // "object"
```

**Strukturę danych jaką jest obiekt należy rozumieć jako sposób gromadzenia nieuporządkowanych (nie zachowujący określonej kolejności) danych.**

## Własności w obiekcie ( klucze ) - dodawanie i odczytywanie danych

Klucze (inaczej właściwości) w obiekcie mogą być stringami (aczkolwiek nie musimy używać cudzysłowów przy ich tworzeniu) lub mogą być liczbami.
Klucze są unikalne w obiekcie, a wartości obiektu mogą być dowolne - mozna przypisać do niej np. prosty tekst, a mozna tez kolejny obiekt.

**jesli chcemy by nasza własność posiadała spację ( co nie jest zalecane ) wtedy faktycznie musimy uzyć cudzysłowia przy ich tworzeniu**

Przykład:

```javascript
const obj = {
  firstName: "John"
  lastName: "Doe",
  score: 123,
  isPremiumUser: true,
  address: {
    postalCode: "32-534",
    city: "Kraków", // zagniezdzony obiekt
  },
};
```

### Odczyt właściwości

Odczytywanie wartości wybranych właściwości obiektu możemy na dwa główne sposoby:

1. Po kropce `.`
2. Wykorzystując składnie kwadratowych nawiasów `[]`

Przykład:

```javascript
const randomPerson = {
  firstName: "John"
  lastName: "Doe",
};

console.log(randomPerson.firstName);
console.log(randomPerson["firstName"]);
```

### Zmiana obiektu - Ustawianie oraz edycja ( nadpisywanie ) własności

Podobnie jak opisane wyżej - odwołujemy się do właściwości (`.` albo `[]`), a następnie używamy operatora przypisania:

```javascript
const person = {
  firstName: "John"
  lastName: "Doe",
};

person.firstName = "Harry";
person["firstName"] = "Ben";
person.age = 18;
```

Powszechna nazwa na tego typu operację zmiany / dodawania właściwości do obiektu to **<u>mutacja obiektu</u>**.
Wazne : **Mozemy edytować wartości kluczy obiektu mimo ze ten zdefinowany jest jako `const`. Wynika to z faktu ze calokwita referencja do obiektu ciagle pozostaje taka sama**

### Dynamicznie tworzone klucze

Można zdefiniować dynamiczny klucz w obiekcie z wykorzystaniem notacji `[]`:

```javascript
const key = "firstName";
const obj = {
  [key]: "John",
};
console.log(obj); // {firstName: "Jan"}
```

### Usuwanie własności z obiektu

```js
const person = {
  firstName: "John"
  lastName: "Doe",
};

delete person.firstName

console.log(person) //const person = { lastName: "Doe" };
```
## Błędy i `Cannot read properties of undefined`

Często pojawiający się błąd, to próba odczytania właściwości z obiektu... która w rzeczywistości nie jest obiektem.

Zwróćmy uwagę na poniższy przykład:

```js
const randomPerson = {
  firstName: "John"
  lastName: "Doe",
  address: {
    postalCode: "32-534",
    city: "Kraków", // zagniezdzony obiekt
  },
};

console.log(randomPerson.address); // { postalCode: "32-534", city: "Kraków" }
```

Próba odwołania się do nie istniejącego klucza w obiekcie

```js
console.log(randomPerson.delivery); // undefined
```

Nie konczy się błędem - zwraca wartość `undefined`.

W przypadku gdybyśmy założyli, że `randomPerson.delivery` to obiekt i zawiera np. właściwość `createdAt`? Sprawdźmy:

```js
console.log(randomPerson.delivery.createdAt);
// Uncaught TypeError: Cannot read properties of undefined (reading 'createdAt')
```

Próba potraktowania `null` lub `undefined` jako obiekt i odwoływania się do właściwości zakończy się wyżej wymienionym błędem `TypeError`.

### Jak się zabezpieczyć przed takimi błędami?

Jest kilka sposobów na zabezpieczenie się przed powyższym błędem, poniżej kilka z nich:

1. instrukcja warunkowa i wykorzystanie niejawnej konwersji
2. użycie operatora `&&`
3. użycie operatora `?.` (_[optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)_)

```js
const randomPerson = undefined;

// 1. Instrukcja warunkowa i wykorzystanie niejawnej konwersji
if (randomPerson) {
  randomPerson.name;
}

// 2. Użycie operatora &&
randomPerson && randomPerson.name;

// 3. Użycie optional chainingu
randomPerson?.name;
```

## Referencja

Porównanie dwóch identycznie zbudowanych obiektów :

```js
console.log({ name: "John" } === { name: "John" }); // false
```

Dlaczego? Poniewaz do obiektów odwołujemy się przez referencję, czyli innymi słowy - powyższe dwa, identycznie "strukturalnie" obiekty znajdują się w innym miejscu w pamięci i dlatego te obiekty nie są tożsame!

Dla typów prostych - następuje kopiowanie:

```js
let name = "Adam";
let newName = name;

console.log(name); // 'Adam'
console.log(newName); // 'Adam'

name = "Andrzej";
console.log(newName); // 'Adam' <-- cały czas mamy poprzednią skopiowaną wartość w pamięci
```

W uproszczeniu, należy rozumieć, że typy referencyjne nie są "kopiowane", a właśnie przekazywane "przez referencję" (mamy jeden obiekt, do którego wiele "etykiet", czyli zmiennych kieruje):

Dla typów złozonych ( referencyjnych ) nie następuje kopiowanie, a "przekazywanie przez referencję" ( jeden obiekt w pamięci a wiele "etykiet" )

```js
const user = {
  name: "Adam",
  age: 28,
  hobbies: ["Programowanie", "Bieganie"],
};
console.log(user); // { name: 'Adam', age: 28, hobbies: ['Programowanie', 'Bieganie'] }

const newUser = user;
console.log(newUser); // { name: 'Adam', age: 28, hobbies: ['Programowanie', 'Bieganie'] }

user.name = "Andrzej";
// UWAGA: newUser "wskazuje" na ten sam obiekt w pamięci, więc jakakolwiek modyfikacja tego obiektu (tutaj: z poziomu user lub newUser) zmodyfikuje jeden i ten sam obiekt!
console.log(newUser); // { name: 'Andrzej', age: 28, hobbies: ['Programowanie', 'Bieganie'] }
```

## Spread i Rest operator

Wraz z wprowadzeniem standardu ECMAScript2015 dostępne w JavaScript stały się operatory `Spread` oraz `Rest`

### Spread

Stosowany tam gdzie potrzebujemy np. skopiować dane z obiektu lub tablicy

#### Kopiowanie obiektów

Wyżej opisany problem referencyjności możemy rozwiązać stosując składnię `...`:

```js
const person = { name: "John", age: 32 };
const copiedPerson = { ...person };

copiedPerson.name = "Adam";

console.log(copiedPerson); // {name: "Jan", age: 32}
```

**Zmianie uległ jedynie skopiowany obiekt, poniewaz zostalo wykonane tzw Shallow copy obiektu - więcej o całym mechaniźmie znajduje się w sekcji przydatnych linków**

#### Połączenie obiektów

Z wykorzystaniem operatora z `Spread` można utworzyć nowy obiekt który zawiera właściwości z kilku obiektów:

```js
const personName = { name: "John" };
const personLastName = { lastName: "Doe" };

console.log({ ...personName, ...personLastName }); // {name: "Jan", lastName: "Doe"}
```

**Jeśli łączone obiekty mają takie same właściwości to możemy nadpisać wartości obiektów ( w kolejności zadeklarowanej od lewej do prawej )**

# Tablice

Tablica to uporządkowana struktura danych, w której poszczególne elementy dostępne są za pomocą kolejno numerowanych indeksów, zaczynając od indeksu `0`.

## Tworzenie tablicy

Mamy kilka sposobów na utworzenie tablicy, ale w 99% przypadków tablicę utworzymy z wykorzystaniem składni `[]`:

```js
const array = ["a", "b", "c"];
```

inna mozliwosci

```js
const array = new Array(1, 2, 3);
```

**Błędem jest powiedzienie, że tablica w JS to osobny typ - **tablica nie jest osobnym typem\*\*:

```js
typeof []; // "object"
```

## Co możemy przechowywać w tablicy?

- tablice nie muszą przechowywać wartości takiego samego typu
- tablica moze zawierac wartosci dowolnego typu - nawet definicje funkcji
- tablice mogą przechowywać inne tablice - wtedy uzyskujemy tablice wielowymiarowe
  **Tablica jest odpowiednikiem ciągu, a tablica dwuwymiarowa jest odpowiednikiem macierzy znanych z matematyki.**
- rozmiar tablicy jest dynamiczny

```js
const array = [
  "John",
  0,
  true,
  null,
  [true, false],
  undefined,
  Symbol("foo"),
  function fnInsideArr(args) {
    console.log(args);
  },
  { name: "John", lastName: "Doe" },
  1n,
];
```

## Operacje tablicowe

Przykłady manipulacji na tablicach na wybranych przykładach

### Dodawanie danych do tablicy - metody `push` i `unshift`

Dodajemy kolejne elementy do tablicy z wykorzystaniem metody `push` (dodawanie elementu na koniec tablicy) i metody `unshift` (dodawanie elementu na początek tablicy).

Przykład:

```js
const fruits = ["orange"];
fruits.push("apple");
console.log(fruits); // ['orange', 'apple'];
fruits.unshift("strawberry");
console.log(fruits); // ['strawberry', orange', 'apple'];
```

### Długość tablicy

Każda tablica posiada właściwość `length` która zwraca nam aktualną długość tablicy:

```js
const fruits = ["strawberry", "orange", "apple"];
console.log(fruits.length); // 3

fruits.push("grapes");
console.log(fruits.length); // 4
```
### Odczytywanie danych z tablicy

Do danej wartości tablicy możemy się dostać po jej indeksie:

```js
const fruits = ["strawberry", "orange", "apple", "grapes"];
console.log(fruits[0]); // 'strawberry'
console.log(fruits[fruits.length - 1]); // 'grapes'
console.log(fruits.at(0))
```

**UWAGA:** Zwróć uwagę na praktyczne wykorzystanie właściwości `length`!

### Usuwanie danych z tablicy - metody `pop` i `shift`

Metoda `pop` usuwa ostatni element tablicy, a metoda `shift` pierwszy element tablicy:

```js
const fruits = ["strawberry", "orange", "apple", "grapes"];

fruits.pop();
console.log(fruits); // ["strawberry", "orange", "apple"]

fruits.shift();
console.log(fruits); // ["orange", "apple"]
```

### Odwrócenie i sortowanie elementów w tablicy - metody `reverse` i `sort`

Metoda `reverse` odwraca kolejność elementów tablicy:

```js
const fruits = ["strawberry", "orange", "apple", "grapes"];
fruits.reverse();
console.log(fruits); // ['grapes', 'apple', 'orange', 'strawberry']
```

Metoda`sort` pozwala posortować elementy tablicy (więcej o algorytmie sortowania znajdziesz na MDN):

```js
const fruits = ["strawberry", "orange", "apple", "grapes"];
fruits.sort();
console.log(fruits);
["apple", "grapes", "orange", "strawberry"];
```

Więcej o metodzie sort która pozwala na bardziej rozbudowane sortowanie : 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 
### Więcej metod tablicowych...

Więcej przydatnych funkcji tablicowych znajdziesz na MDN: [Obiekt Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### Konwertowanie obiektu na tablicę

Możemy przekonwertować obiekt na tablicę na kilka sposobów.

- za pomocą `Object.keys` możemy przekształcić klucze obiektu na kolejne elementy tablicy:

```js
const person = {
  name: "Jan",
  lastName: "Nowak",
  age: 43,
};

Object.keys(person); // ['name', 'lastName', 'age']
```

- za pomocą `Object.values` możemy przekształcić wartości obiektu na kolejne elementy tablicy:

```js
const person = {
  name: "Jan",
  lastName: "Nowak",
  age: 43,
};

Object.values(person); // ['Jan', 'Nowak', 43]
``

#### Destrukturyzacja

Mechanizm destrukturyzacji pojawił się wraz z standardem _ECMAScript 2015_ i pozwala on na "wyekstraktowaniu" wybranych danych z tablicy lub obiektu.

Zwróć uwagę na poniższy zapis:

```js
const user = {
  name: "John",
};
```

Chcąc zapisać wybrane dane z obiektu w osobnym zmiennych mogę to zrobić tak:

```js
const name = user.name;
const score = user.score;
const isPremiumUser = user.isPremiumUser;
```

Taki sam efekt mozemy osiągnąć za pomocą destrukturyzacji skracjąc zapis 

```js
const { name, score, isPremiumUser } = user;
```

Ten sam mechanizm można zastosować dla tablic:

```js
const fruits = ["strawberry", "orange", "apple", "grapes"];

const [strawberry] = fruits;

console.log(strawberry); // "strawberry"
```


### Cwiczenia 

#### Zadanie 1 - typy danych
Zadeklaruj zmienne z użyciem słowa kluczowego let i przechowaj w nim wszystkie typy danych dostępne w JS, czyli:

- typ Number (typ prymitywny)
- typ String (typ prymitywny)
- typ Boolean (typ prymitywny)
- typ null (typ prymitywny)
- typ undefined (typ prymitywny)
- typ Symbol (typ prymitywny)
- typ BigInt (typ prymitywny)
- typ Object (typ referencyjny)
Pamiętaj, że funkcja w JS jest obiektem i też może zostać przypisana do zmiennej.

#### Zadanie 2 - podstawowe operacje na tablicach
Stwórz tablicę z listą swoich ulubionych potraw. Następnie:

- Wypisz pierwszą potrawę w konsoli.
- Wypisz ostatnią potrawę w konsoli (skorzystaj z atrybutu length).
- Dodaj potrawę na końcu tablicy.
- Usuń pierwszą potrawę z tablicy.
- Zmodyfikuj potrawę pod indeksem 1.
- Dodaj potrawę na początku tablicy.
