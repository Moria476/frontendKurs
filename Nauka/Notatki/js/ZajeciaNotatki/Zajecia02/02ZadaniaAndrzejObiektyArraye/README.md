# JavaScript - Arrays and Objects

## Podstawowe operacje na typach złożonych - tablice

### Zadanie 1.

Wybierz element `**` z zagnieżdżonej tablicy

```js
const ticktacktoe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "**", "o"],
];
```

### Zadanie 2.

Stwórz funkcję `multiplyBy2()`, która mnoży elementy w tablicy razy 2.

Przykład:

```js
multiplyBy2([1, 5, 8, 21]); // [2, 10, 16, 42]
multiplyBy2([17, 123124, 3]); // [34, 246248, 6]
```

### Zadanie 3.

Sprawdź czy element w tablicy jest `truthy` lub `falsy`

```js
const values = [
  [],
  {},
  -10,
  1,
  0,
  "",
  "full string",
  " ",
  undefined,
  NaN,
  null,
  "0️⃣",
  "💩",
];
```

Przykład:

```js
console.log(1); // 1 is truthy
console.log("💩"); // 💩 is truthy
console.log(""); //  is falsy
```

### Zadanie 4.

Napisz funkcję `check()`, która przyjmuje w parametrze tablicę - w zależności od długości tablicy - funkcja powinna zwrócić odpowiedni string z kolorem:

- 1 = "#green"
- 2 = "#red"
- 3 = "#blue"
- Każdy inny = "#black"

Użyj `switch` statement.

### Zadanie 5.

Napisz funkcję `stringLength()` która jako parametr przyjmie tablicę stringów i zwróci tablicę ich długości.

Przykład:

```js
stringLength(["hello", "world", "dog", "sophisticated"]); // [5, 5, 3, 13]
```

### Zadanie 6.

Posortuj osoby z tablicy `people` alfabetycznie według nazwiska.

### Zadanie 7.

1. Wyświetl tylko elementy większe lub równe od 20:
   `Elementy większe lub równe od 20: 50,20,21,100,20,44`
2. Policz sumę wszytskich elementów tablicy
   `Suma elementów w tablicy: 215`
3. Wyświetl sumę elementów tylko ujemnych:
   `Suma elementów ujemnych: -134`
4. Wyświetl sumę elementów na indeksach parzystych:
   `Suma elementów parzystych: 193`

```js
const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];
```

### Zadanie 8.

Napisz funkcję `longestString()`, która z tablicy stringów zwróci pierwszy najdłuższy ciąg znaków:

```js
longestString(["earth", "vegetable", "cat"]); // 'vegetable'
longestString(["dog", "snake", "grasshopper"]); // 'grasshopper'
longestString(["home", "born", "on"]); // 'home'
longestString(["nice tasks", "could have been better"]); //'could have been better'
```

### Zadanie 9.

Napisz funkcję `flatArray()` która przyjmuje tablicę tablic i zwraca je połączone w jedną.

Przykłady:

```javascript
 [['a', 'b'], [1,2]] // ['a', 'b', 1, 2]
[
  ["red", "blue"],
  ["green", "red", "yellow"],
  ["black", "blue"],
  ["pink", "black", "white"],
]; // ['red', 'blue', 'green', 'red', 'yellow', 'black', 'blue', 'pink', 'black', 'white']
```

## Podstawowe operacje na typach złożonych - obiekty

### Zadanie 10.

Napisz funkcję `deleteComment()`, która na podstawie podanego `id` usunie z podanej tablicy `comments` określony komentarz.

## Zadania 11-15

Dla zadań 10-14 musisz skorzystać z danych z pliku `data.js`.

### Zadanie 11.

Stwórz funkcję `showOnlyUsersWithRace()`, która zwróci jedynie osoby z podaną rasą w argumencie.

Przykład:

```js
showOnlyUsersWithRace("Cambodian"); //[{id: 8, first_name: "Garvey", last_name: "Islep", email: "gislep7@nps.gov", gender: "Male", …}]'
showOnlyUsersWithRace(1); // This race doesn't exist
showOnlyUsersWithRace("Polish"); // []
```

### Zadanie 12.

Wyświetl każdego z userów w konwencji: `title first_name last_name work as job_title in company`.

Przykład:

```js
// Rev Kaylil Hovey work as Recruiting Manager in Browseblab
// Rev Cesare Caroline work as Computer Systems Analyst II in Wordtune
// Mr Xaviera Danilchenko work as Statistician IV in Rhynyx
// Honorable Shandy Sanford work as Data Coordiator in Topdrive
```

### Zadanie 13.

Ogranicz zawartość kolekcji do kluczy `id, first_name, last_name` i dodaj nowy klucz `full_name` składający się z `first_name` i `last_name`.

Przykład:

```js
[
{id:1, first_name: "Kaylil", last_name: "Kaylil", full_name: "Kaylil Hovey"}
{id:2 ,first_name: "Cesare", last_name: "Cesare", full_name: "Cesare Caroline"}
{id:3 ,first_name: "Xaviera", last_name: "Xaviera", full_name: "Xaviera Danilchenko"}
]
```

### Zadanie 14.

Wyświetl jedynie osoby, które mają co najmniej 30 lat i są kobietami w konwencji `name is X years old` i na koniec wyświetl sumę ich lat.

Przykład:

```js
// Kaylil is 33 years old
// Xaviera is 55 years old
// Shandy is 76 years old
// Frederica is 89 years old
// Together they have 253 years
```

### Zadanie 15.

Dodaj do kolekcji dodatkowe klucze:

1. `height`: wiek + 100
2. `weight`: wiek + 10
3. `bmi`: weight / (height/100) ^ 2

Następnie zwróć tablicę imion tych osób, które mają BMI w zakresie 18,5 – 24,99.

Przykład:

```js
["Kaylil", "Muire", "Aristotle", "Mano", "Bryon"];
```

### Zadanie 16.

Na podstawie tablicy obiektów `inventors`:

1. Posortuj wynalazców według daty urodzenia, od najstarszego do najmłodszego
2. Wyświetl informację ile lat żyli wszyscy wynalazcy?
3. Posortuj wynalazców według długości życia, od najdłużej żyjącego do najkrócej

### Zadanie 17.

Napisz funkcję `dayOfTheWeekYouWereBorn()`, która zwróci dzień tygodnia na podstawie daty Twoich urodzin.

```js
dayOfTheWeekYouWereBorn("November 30 1993"); // You were born on Tuesday
```

Skorzystaj z wbudowanego obiektu `Date`.

### Zadanie 18.

Napisz funkcję `daysUntilChristmas()`, która zwróci liczbę dni do Świąt Bożego Narodzenia 🎅🏻🎄

```js
daysUntilChristmas(); //  60 days left until Christmas!
```

Funkcja nie przyjmuje żadnego parametru, opiera się zawsze na dzisiejszej dacie.

### Zadanie 19.

Czy zostanę junior developerem? Trudne pytanie! Napisz funkcję, która pomoże rozwikłać tę zagadkę.

Wiemy, że żeby zostać junior developerem trzeba spełnić 2 warunki jednocześnie:

1. Przerobić odpowiednio dużo zadań (minimum 100)
2. Przepracować w czasie wolnym co najmniej 80h

Tablica `students` zawiera ilość aspirujących developerów, a obiekt `requirements` zawiera opisane wyżej wymagania:

```javascript
const students = [
  { name: "Mariusz", tasksDone: 150, hoursSpent: 160 },
  { name: "Ewelina", tasksDone: 1, hoursSpent: 1 },
  { name: "Alicja", tasksDone: 100, hoursSpent: 80 },
  { name: "Marek", tasksDone: 200, hoursSpent: 40 },
  { name: "Dagmara", tasksDone: 50, hoursSpent: 100 },
];

const requirements = {
  minHoursSpent: 80,
  minTasksDone: 100,
};
```

Napisz funkcję `checkJuniorReq` - powinna ona zwracać string zawierający imiona osób którzy są na dobrej drodze do zostania Juniorem oraz osoby, które trzeba pogonić do pracy. Wynikowy kod może wyglądać następująco:

```javascript
"Mariusz, Alicja - gratulacje! Ciężka praca popłaca! Ewelina, Marek, Dagmara - DO ROBOTY LENIE!";
```

### Zadanie 20.

Napisz funkcję `countWordOccurrences`, która przyjmie ciąg znaków i zwróci obiekt, który będzie reprezentował ilość wystąpień każdego słowa w przekazanym _stringu_.

Przykład:

```javascript
countWordOccurrences(
  "JavaScript byl dla mnie skomplikowany a teraz JavaScript jest dla mnie znacznie prostszy. Viva Javascript"
); // => { javascript: 3, byl: 1, dla: 2, mnie: 2, skomplikowany: 1, a: 1, teraz: 1, jest: 1, znacznie: 1, prostszy: 1, viva: 1 }
```

### Zadanie 21.

Zaimplementuj funkcję `toCamelCase` która przyjmie _string_, który będzie ciągiem znaków, gdzie każde słowa będą oddzielone albo myślnikiem (`-`) albo znakiem podkreślenia (`_`). Funkcja `toCamelCase` powinna konwertować otrzymany w parametrze ciag znaków i modyfikować go tak, aby był napisany _camelCase_.

Dodatkowo zwracany ciąg znaków powinien być pisany wielkimi literami tylko wtedy, gdy oryginalne słowo było pisane wielkimi literami.

Przykłady:

```javascript
toCamelCase("java_script"); // => javaScript
toCamelCase("java-script"); // => javaScript
toCamelCase("Java-Script"); // => JavaScript
toCamelCase("asp_Net_Core"); // => aspNetCore
```

### Zadanie 22.

Utwórz funkcję `getStudentTopGrades`, która pobiera tablicę obiektów, gdzie każdy obiekt reprezentuje ucznia i jego oceny. Funkcja powinna zwrócić tablicę ich najwyższych ocen - każdy element tablicy powinien reprezentować najwyższą uzyskaną ocenę cząstkową danego studenta. Jeśli uczeń nie ma ocen, to przyjmijmy, że jego najwyższa ocena jest równa 0.

Przykład:

```javascript
getStudentTopGrades([
  {
    id: 1,
    name: "Jacek",
    grades: [5, 3, 4, 2, 5, 5],
  },
  {
    id: 2,
    name: "Ewa",
    grades: [2, 3, 3, 3, 2, 5],
  },
  {
    id: 3,
    name: "Zygmunt",
    grades: [2, 2, 4, 4, 3, 3],
  },
]); // => [5, 5, 4]
```

### Zadanie 23.

Mamy obiekt `idUsers` w którym każdym kluczem jest `id` użytkownika, a przypisana do niego wartość jest jego danymi. Napisz funkcję `correctData()` która zamieni to na tablicę użytkowników tak, aby każdy element oprócz danych zawierał też pole `id` w następujący sposób:

```javascript
[
  {
    id: 243,
    firstName: "Yorker",
    lastName: "Surgey",
    email: "ysurgey0@census.gov",
    jobTitle: "VP Accounting"
  },
  {
  ...
  },
]
```
