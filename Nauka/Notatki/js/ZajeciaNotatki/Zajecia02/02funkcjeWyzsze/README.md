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
