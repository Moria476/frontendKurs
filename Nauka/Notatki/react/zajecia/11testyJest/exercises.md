# ⛏️ Część praktyczna

> **⚠️**: Z gałęzi `master` utwórz gałąź o nazwie `student/twoje-imie-i-nazwisko` i pracuj na tej gałęzi.

Poniżej ćwiczenia do wykonania:

## Challenge 1 - Wprowadzenie do testów jednostkowych z użyciem frameworka Jest

Utwórz dwa pliki:

- `users.ts` - tutaj znajdzie się implementacja
- `users.spec.ts` - tutaj znajdą się testy które napiszesz

Plik `users.ts` powinna wyglądać wyjściowo tak:

```typescript
type User = {
  id: number
  name: string
  score: number
}

const users: User[] = [
  { id: 1, name: 'Will', score: 100 },
  { id: 2, name: 'John', score: 88 },
  { id: 3, name: 'Andrew', score: 95 },
]

export const findUser = (userId: number): User => {
  // ...
}

```

Twoim zadaniem jest przygotowanie funkcji `findUser` tak, aby wyszukiwała obiekt reprezentujący użytkownika z tablicy `users` na podstawie przekazywanego argumentu `userId`. Jeżeli funkcja nie znajdzie użytkownika to powinna wyrzucić wyjątek o treści:

```typescript
`User with ID ${userId} was not found.`
```

Po napisaniu implementacji, zadbaj o napisanie testów w pliku `users.spec.ts` które przetestują wszystkie możliwe scenariusze działania funkcji `findUser`. Po zakończeniu zadania, wspólnie zapoznamy się z tematyką "*coverage*" (pokrycia testami) oceniając jak udało nam się pokryć możliwe ścieżki wykonania funkcji `findUser`.

## Challenge 2 - Praktyczny przykład testów logiki biznesowej

W katalogu `modules` znajdziesz nowe pliki:

- `types.ts` - definicje głównych typów `Entity`, `Answer` oraz `Field`
- `entities.mock.ts` - przykładowe tablice obiektów, reprezentujące `Entities` oraz `Answers`
- `fields.ts` - implementacja
- `fields.spec.ts` - tutaj znajdą się testy które napiszesz

Na zajęciach omówimy działanie głównej funkcji `getFields` eksportowanej z modułu `fields.ts`. Po omówieniu kodu przez prowadzącego, upewnij się, że dobrze rozumiesz działanie modułu `fields.ts`, a następnie przejdź do napisania testów. Postaraj się przetestować wszystkie możliwe scenariusze. 

## Challenge 3 - Wykorzystanie React Testing Library w celu testowania komponentów UI

Na podstawie wiedzy z zajęć, przetestuj komponent `App.tsx` - sprawdź co zostaje wyrenderowane na początku, oraz przetestuj wyświetlenie poprawnego komunikatu o przesłaniu formularza po kliknięciu w przycisk "Submit".