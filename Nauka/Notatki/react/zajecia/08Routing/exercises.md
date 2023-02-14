# ⛏️ Część praktyczna

> **⚠️**: Z gałęzi `master` utwórz gałąź o nazwie `student/twoje-imie-i-nazwisko` i pracuj na tej gałęzi.

Poniżej ćwiczenia do wykonania:

## Challenge 1 - Zarządzanie podstronami z użyciem stanu

Przygotuj aplikację która będzie zawierała po lewej stronie *sidebar* nawigacyjny z dwoma linkami:

- `actors` - po wybraniu tej opcji, wyświetl w głównej sekcji strony przykładową listę aktorów
- `movies` - po wybraniu tej opcji, wyświetl w głównej sekcji strony przykładową listę 

Zwróć uwagę, że po odświeżeniu strony nie jesteś w stanie od razu wejść na widok wyświetlający od razu aktorów lub filmy - rozwiążemy to w kolejnych zadaniach.

## Challenge 2 - Wykorzystanie natywnego History API

Naszym celem jest wykorzystanie wiedzy o natywnym API i próba zarządzania adresem URL w taki sposób, aby po przejściu na ścieżkę `/movies` wyświetlona była lista filmów, a po wejściu na ścieżkę `/actors` wyświetlona była lista aktorów.

Po załadowaniu strony po raz pierwszy w zależności od adresu URL powinniśmy załadować odpowiednie dane i aktywny link w nawigacji powinien być podkreślony.

## Challenge 3 - Przepisywanie natywnego History API na wykorzystanie React Router

Na podstawie wiedzy z zajęć, zmodyfikuj kod z poprzedniego ćwiczenia wykorzystując bibliotekę *React Router*.