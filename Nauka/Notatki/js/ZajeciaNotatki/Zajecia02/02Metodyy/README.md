<a href='https://infoshareacademy.com/'><img src='https://infoshareacademy.com/wp-content/themes/infoshare/src/images/logo.svg' height='60' alt='infoShare Academy Logo' aria-label='https://infoshareacademy.com/' /></a>

# Pętle i metody do pracy z tablicami

## Plan

1. wprowadzenie
2. metody tablicowe `.map`, `.filter`, `.forEach`, `.reduce`
3. iteracje z uzyciem for ..of, for.. in

4. chaining
5. Object.defineProperty()
6. `flatMap()` i `reduceRight()`

## Przydatne linki

1. [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)



## Mozliwosci metod metod tablicowych

### `forEach`

- iteracja po elementach

```js
const numbers = [54, 44, 72, 65];

const users = [
  {
    name: "Adam",
    age: 16,
    city: "Kraków",
    job: "Carpenter",
  },
  {
    name: "Piotr",
    age: 33,
    city: "Warszawa",
    job: "Engineer",
  },
  {
    name: "Julia",
    age: 20,
    city: "Łódź",
    job: "Medic",
  },
  {
    name: "Henryk",
    age: 33,
    city: "Łódź",
    job: "Shop Assistant",
  },
  {
    name: "Kamila",
    age: 25,
    city: "Łódź",
    job: "Barber",
  },
];
```

#### Ćwiczenia

1. Wyswietl wszystkie miasta, które znajduja sie w tablicy
2. Wyświetl wiek kazdej oraz czy obchodzi właśnie X-lecie ( moze byc 5 lub 10 lat )

### `map`

- zwraca tablice

```js
const servers = [
  { ip: "192.268.0.1", name: "Server 1", app: "Random App 12" },
  { ip: "192.55.32.3", name: "Server 2", app: "Random App 84" },
  { ip: "192.3.3.3", name: "Server 3", app: "Random App 44" },
  { ip: "192.55.65.2", name: "Server 4", app: "Random App 54" },
];
```

# Cwiczenia

1. Stwórz korzystając z danych oraz podręcznej tablicy, iterując za pomocą for'a nową tablicę zawierającą IP serverów

- array.push
- for(let i = 0; i < 10; i++ )

2. Przepisz tak tablicę by korzystała z funkcji map
3. Zwróć tablicę która zawiera numery aplikacji (same cyfry)

### `filter`

- odfiltrowuje jeśli funkcja wyzszego rzędu zwróci `false`

```js
const cities = [
  { name: "New York", population: 14, country: "US" },
  { name: "Gdansk", population: 5, country: "PL" },
  { name: "Berlin", population: 12, country: "DE" },
  { name: "Moscow", population: 22, country: "RU" },
  { name: "Rome", population: 15, country: "IT" },
];
```

#### Cwiczenia

1. Odfiltruj miasta które kończą się na literę `k`

- dodatkowo `every` / `some`

### Pozostałe własności

- pozostałe dostępne obiekty w metodach do iteracji
- chaining

#### Cwiczenia

Na podstawie tabeli z poprzedniego zadania odfiltruj miasta z populacja mniejsza niz 10, a następnie zwróć tablicę ich kodów krajowych.

### Reduce / ReduceRight ( reverse )

- redukuje do jednej wartości

### FlatMap

- łączy niejako funkcje `map` i `flat()`

```js
const arr = [1, 3, 5];

const tab = arr.flatMap((value) => [value, value + 1]);
console.log(tab); // [1, 2, 3, 4, 5, 6]
```

## for of / for in

Pierwsza z nich to pętla for...of , a druga pętla for...in. Pętla for...of używana jest do iterowania po obiektach iterowalnych jak string, tablice, struktury danych jak Map czy Set. Pętla for...in jest używana głównie do iterowania po właściwościach obiektów i najlepiej użyć jej właśnie tylko do tego.

### for of

- [0, 1, 2, 3, 4]
- [S, L, O, W, O]

- po tablicy

```js
const arr = ["a", "b", "b"];
for (const value of arr) {
  console.log(value); // 'a' 'b' 'c'
}
```

- po stringu

```js
const message = "Slowo";

for (const value of message) {
  console.log(value);
```

### Ćwiczenie

1. Zrób doskadnie to samo ćwiczenie jak w przypadku pierwszym z foreach jednak teraz z wykorzystaniem metody for of
2. Przeiteruj po tekscie "Alakazam" i przy kazdym wystapieniu litery "A" wyswietl komunikat "Litera A!"

### for in

- [0, 1, 2, 3, 4]
- [S, L, O, W, O]

```js
for (const value in arr) {
  console.log(value); // '0' '1' '2'
}
```

```js
const object = { a: 1, b: 2, c: 3 };

for (const value in object) {
  console.log(value); // 'a' 'b' 'c'
}
```

```js
const object = { a: 1, b: 2, c: 3 };

for (const value in object) {
  console.log(object[value]); // 1 2 3
}
```

- w tych pętlach można użyć break
- enumerable? defineProperty

### Cwiczenia uzupelniajace

Napisz własną implementacje metod forEach i map.

```js
function customForEach(array, callback) {
// Uzupełnij tutaj
}

function customMap(array, callback) {
// Uzupełnij tutaj
}

result.forEach(function (element, index, array) {
    console.log(element, index, array);
});

// Poniższe wywołanie funkcji customForeEach powinno zadziałać tak samo jak powyższe, natywne forEach
customForEach(result, function (element) {
    console.log(element, index, array);
});

const x = [1, 2, 3];
const y1 = x.map(function (element) {
    return element \* 5;
});

// Funkcja customMap powinna zwrócić taką samą tablicę jak powyższa, natywna funkcja map
const y2 = customMap(x, function (element) {
    return element \* 5;
});
```
