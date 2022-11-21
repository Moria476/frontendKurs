# Zadanie domowe - 4

## Zadanie 1. **(10 pkt)**

Napisz pętlę, która zwróci dany ciąg znaków w konsoli (dokładnie w takiej strukturze).

```js
*
* *
* * *
* * * *
* * * * *
```

## Zadanie 2. **(20 pkt)**

Napisz funkcję `pattern`, która przyjmuje 2 parametry (znak, liczbę), która wyświetli ciąg znaków połączony '-' ale nie więcej niż 10 znaków.

```js
pattern($, 5); // $-$-$-$-$
pattern($, 17); // $-$-$-$-$-$-$-$-$-$
pattern(@, 3); // @-@-@
```

## Zadanie 3. **(30 pkt)**

Napisz funkcję `evenNumbersOnly`, która jako argument przyjmuje tablicę i zwróci tablicę, która zawiera parzyste liczby.

```js
evenNumbersOnly([1, 2, 3, 4, 5, 6, 7]); // [2, 4, 6]
evenNumbersOnly(["Czasem", 12, "Słońce", 3, "czasem", 600, "deszcz"]); // [12, 600]
evenNumbersOnly([{}, {}, [], [], "abc", 2]); // [2]
evenNumbersOnly(["a", null, true, undefined, {}, []]); // []
```

## Zadanie 4. **(40 pkt)**

Twoim zadaniem będzie przygotowanie własnej funkcji-walidatora o nazwie `isPasswordCorrect` która sprawdzi czy:

1. hasło ma przynajmniej 6 znaków
2. zawiera przynajmniej jeden znak specjalny
3. zawiera przynajmniej jedną liczbę

Funkcja powinna zwracać `true` dla poprawnego hasła i `false` dla hasła które nie spełnia wymagań.

```js
isPasswordCorrect("infoShare"); // false
isPasswordCorrect("qwerty123"); // false
isPasswordCorrect("qwerty123!"); // true
isPasswordCorrect("!qw12"); // false
```
