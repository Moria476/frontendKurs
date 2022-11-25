# Zadanie domowe - 5

## Zadanie 1. **(20 pkt)**

Utwórz tablicę obiektów, zawierających 5 studentów.

Każdy obiekt powinien zawierać pola (wartości dowolne, wymyślone przez Was):

- id (typ number)
- imię (typ string),
- nazwisko (typ string),
- pesel (typ string),
- kierunek studiów (typ string)
- oceny (tablica typów number) - 6 ocen dla każdego ze studentów

## Zadanie 2. **(20 pkt)**

Utwórz funkcję `addNewStudent` przyjmującą 5 paramaterów (imię, nazwisko, pesel, kierunek studiów, notes). Funkcja po uruchomieniu powinna utworzyć obiekt nowego studenta oraz dodać go do tablicy, utworzonej w Zadaniu 1. Id powinno zostać utworzone randomowo (np. za pomocą `Math.random()`, max 3 liczby)

## Zadanie 3. **(20 pkt)**

Utwórz funkcję, przyjmującą jako parametr tablicę obiektów, utworzoną w poprzednich zadaniach. Funkcja powinna wyświetlić w konsoli dane wszystkich studentów w postaci: `Student 1: Jan Kowalski, PESEL: 111222333, Field of study: Informatics` dla każdego studenta w tablicy.

## Zadanie 4. **(40 pkt)**

Utwórz funkcje `getMaxNote` oraz `getMinNote` przyjmującą argumenty: `TABLICA_STUDENTÓW`, `PESEL_STUDENTA`, których rolą będzie wyświetlanie w konsoli tekstu (przykładowo): `Max note for student Ewa Nowak is 5` / `Min note for student Ewa Nowak is 2`

Przykład:

```js
  {
    id: 2,
    pesel: "234567890",
    name: "Ewa",
    lastName: "Nowak",
    fieldOfStudy: "Architecture",
    notes: [2, 3, 3, 3, 2, 5],
  }

  getMaxNote(students, "234567890") // `Max note for student Ewa Nowak is 5`
  getMinNote(students, "234567890") //`Min note for student Ewa Nowak is 2`
```

## Założenia

1. Funkcje mogą być uruchamiane zarówno w konsoli przeglądarki jak i konsoli NodeJS.
2. Zadanie będzie testowane poprzez ręczne uruchomienie każdej funkcji.
3. Nazwy funkcji, pola obiektów, nazwy zmiennych i stałych powinny być zapisane po angielsku.
