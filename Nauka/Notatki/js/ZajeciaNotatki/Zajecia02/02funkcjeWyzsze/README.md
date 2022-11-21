# <a href='https://infoshareacademy.com/'><img src='https://infoshareacademy.com/wp-content/themes/infoshare/src/images/logo.svg' height='60' alt='infoShare Academy Logo' aria-label='https://infoshareacademy.com/' /></a>

## Plan Zajęć

1. Funkcje wyzszego rzędu
2. Closures, czyli domknięcia
3. Currying
4. Memoizacja

### Funkcje HOF ( higher order functions )

Funkcja wyzszego rzedu to taka funkcja, ktora pobiera funkcje jako parametr i/lub zwraca funkcje

```javascript
function exampleFn(fn) {
  //...
}
```

```javascript
function exampleFn(fn) {
  function innerFunction() {
    // ...
  }

  return innerFunction;
}

console.log("Cześć 1");
console.log("Cześć 2");
console.log("Cześć 3");
console.log("Cześć 1");
console.log("Cześć 2");
console.log("Cześć 3");
console.log("Cześć 1");
console.log("Cześć 2");
console.log("Cześć 3");

for (let i = 0; i < 10; i++) {
  console.log(`Cześć ${i}`);
  // inna logika
  console.log("a");
}

for (let i = 0; i < 10; i++) {
  console.log(`Cześć ${i}`);
  // inna logika
  console.log("a");
}

function test(fn, times) {}
```

### Closures - domknięcia

# Domknięcia

O funkcji mówi się często, że jest wykonywana natychmiast po jej wywołaniu (np. `myFunction()`), a wszelke zmienne zadeklarowane wewnątrz niej są dostępne tylko podczas wykonywania tej funkcji.

```js
function myFunction() {
  const value = 123; // wartość dostępna tylko tutaj
  console.log("myFunction says", value);
}
// tu nie jest dostępna
myFunction();
// tu tez nie jest dostępna
```

Nie jest to zawsze prawda, gdyż w Javascript funkcje mogą być tworzone wewnątrz innych i przekazywane poza nią.
Wtedy tworzy się niejako połączenie między funkcjami tak, że funkcja wewnętrzna w momencie wywołania widzi cały czas to co funkcja zewnętrzna.

```js
function myFunction() {
  const value = 123; // dostepne tylko tutaj
  console.log("myFunction says", value);

  function innerFunction() {
    return value * 1000; // value accessible also when it's called from external
  }
  return innerFunction; // zauwazmy ze jest to innerFunction, a nie innerFunction()
}
// tu nie jest dostępna
const returnedInnerFunction = myFunction();
console.log(returnedInnerFunction());
// tu nie jest dostępna
```

#### Przykłady

Przyklad 1

```js
const createStorage = function () {
  let value = 0;

  return {
    setValue(newValue) {
      value = newValue;
    },
    getValue() {
      return value;
    },
  };
};

const storage = createStorage();

storage.setValue(1);
console.log(`storage value: ${storage.getValue()}`);

storage.setValue(2);
console.log(`storage value: ${storage.getValue()}`);

storage.setValue(3);
console.log(`storage value: ${storage.getValue()}`);

storage.setValue(4);
console.log(`storage value: ${storage.getValue()}`);

const stor1 = createStorage();
const stor2 = createStorage();
const stor3 = createStorage();
const stor4 = createStorage();
```

Przyklad 2

```js
const createIncrementor = function (id) {
  let value = 0;
  return function () {
    debugger;
    value = value + 1;
    console.log(`incrementor ${id} incremented to ${value}`);
  };
};
```

#### Zadanie

Napisz funkcję, która przyjmie inną funkcję jako parametr i zwróci funkcję która wywołuje poprzednią za pierwszym razem, a za kolejmym wywołaniem wypisuje
na konsoli 'blokada!'

```js
function createFunctionThatRunsOnlyOnce(originalFunction) {
  // ???
}

function simpleFunction() {
  console.log("I do my job");
}

const limitedFunction = createFunctionThatRunsOnlyOnce(simpleFunction); //note, there is no simpleFunction() but simpleFunction

limitedFunction(); // I do my job
limitedFunction(); // blokada!
limitedFunction(); // blokada!
limitedFunction(); // blokada!
// ...
```

### Currying

Funkcja która przyjmuję funkcję jako parametr, oraz jej początkowe X
argumentów zwracając funkcję, która ju ma ustawione te argumenty

```javascript
function add(a, b, c) {
  return a + b + c;
}

const addCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

// Cw
const curryFn = (fn, param1) => {
  // implementacja
};

const addToFive = curryFn(add, 5);
console.log(addToFive(4, 3));
```

### Memoize

Technika optymalizacyjna stosowana przede wszystkim w celu przyspieszenia programów komputerowych poprzez zapisywanie wyników kosztownych wywołań funkcji i zwracanie wyników z pamięci podręcznej, gdy te same wejścia wystąpią ponownie.

```javascript
function calc(n) {
  console.time();
  let res = 0;
  for (let i = 0; i < n; i++) {
    res = res + Math.pow(2, n);
    Math.random();
  }
  console.timeEnd();
  return res;
}
```
