# <a href='https://infoshareacademy.com/'><img src='https://infoshareacademy.com/wp-content/themes/infoshare/src/images/logo.svg' height='60' alt='infoShare Academy Logo' aria-label='https://infoshareacademy.com/' /></a>

**👋 Dominik Młynarczyk, 📧 [hello@dominikmlynarczyk.com](mailto:hello@dominikmlynarczyk.com)**

# 🎒 Globalny stan na przykładzie Context API

Poniżej znajduje się część teoretyczna dotycząca _Context API_.

W ramach tych zajęć dowiemy się:

- 🤾🏽‍♂️ Dlaczego _[props drilling](https://kentcdodds.com/blog/prop-drilling)_ jest uciążliwy - zrozumiemy na czym polega _props drilling_ i jak proces przekazywania danych w aplikacji usprawnić.
- 🎒 Czym jest globalny stan aplikacji
- 🌀 Czym jest i jak działa Context w _React_

## 🎒 Globalny stan aplikacji

W założeniu _Reacta_ dane w obrębie komponentów są przekazywane w jednym kierunku (od komponentu-rodzica do komponentu-dziecka) poprzez właściwości (`props`). W przypadku dużego drzewa komponentów przekazywanie danych może się okazać uciążliwe, gdyż będzie to wymagało przekazywania _propsów_ przez wiele komponentów - mechanizm ten nazywa się w nomenklaturze _Reacta_ "_props-drilling_".

Przykładem dynamicznych danych które często są dystrybuowane przez wiele komponentów w aplikacji to:

- preferencje językowe
- paleta kolorów
- dane użytkownika

**Rozwiązaniem tego problemu jest wykorzystanie globalnego stanu aplikacji, czyli centralnego miejsca do którego może mieć dostęp dowolnie wybrany komponent.** Jednym z narzędzi które możemy użyć aby rozwiązać ten problem jest _Context API_, które nie zostało docelowo stworzone aby zarządzać globalnym stanem, a bardziej odpowiedzieć na problem [wstrzykiwania zależności](https://pl.wikipedia.org/wiki/Wstrzykiwanie_zale%C5%BCno%C5%9Bci). Warto jednak zacząć poznawać koncepcję globalnego stanu właśnie od poznania _Context API_.

## 🌀 Context API

Kontekst w _Reakcie_ służy do przekazywania danych wewnątrz drzewa komponentów bez konieczności przekazywania ich przez `propsy` każdego komponentu pośredniego. Zwykle kontekstu używa się w sytuacjach, w których pewne dane muszą być dostępne dla **wielu** komponentów na różnych poziomach zagnieżdżenia. Co ważne, możemy mieć też "wiele kontekstów" w obrębie jednej aplikacji.

_Context_ pozwala na propagację/“rozgłoszenie” (ang. broadcast) zarówno samych danych, jak i
wszelkich ich modyfikacji, do komponentów znajdujących się poniżej w hierarchii. Do przekazywania owych danych służy specjalny komponent `Provider`, a odbiór danych jest m.in. możliwy za pomocą wykorzystania komponentu `Consumer`. Zmiana danych w kontekście spowoduje re-render "konsumentów", tym samym mamy dostęp do aktualnych danych, bez konieczności przekazywania ich przez propsy.

### Wykorzystanie API Kontekstu

Kontekstu możemy użyć dla całej aplikacji (na poziomie pliku `App.js`) lub w dowolnej jej części, jeżeli wyizolowana część aplikacji wymaga przekazywania danych za pomocą _Contextu_.

Poniżej opis kroków do wykonania aby wykorzystać _Context_.

#### Dystrybucja danych (utworzenie _Providera_)

W komponencie który ma dystrybuować kontekst należy:

1. Zaimportować kreator kontekstu:

   ```jsx
   import { createContext } from 'react'
   ```

2. Stworzyć obiekt kontekstu (najczęściej chcemy go wyeksportować, będzie potrzebny dla komponentów korzystających z kontekstu):

   ```jsx
   export const ThemeContext = createContext()
   ```

3. Stworzyć dane które posłużą za globalny stan:

   ```jsx
   const themes = {
     light: {
       foreground: '#000000',
       background: '#eeeeee',
     },
     dark: {
       foreground: '#ffffff',
       background: '#222222',
     },
   }
   ```

4. Zwrócić komponent rozgłaszający dane (_Provider_), z przekazanym globalnym stanem. Ten komponent
   pozwoli komponentom odczytującym na zasubskrybowanie się na zmiany w ramach tego drzewa:

   ```jsx
   <ThemeContext.Provider value={themes}>
     {/* komponenty w strukturze poniżej */}
   </ThemeContext.Provider>
   ```

#### [scenariusz z użyciem komponentu *Consumer*] Odbiór danych (utworzenie _Consumera_)

W komponencie który ma odbierać dane kontekstu należy:

1. Zaimportować utworzony kontekst:

   ```jsx
   import { ThemeContext } from './miejsce/trzymania/kontekstu'
   ```

2. Wykorzystać komponent `Consumer` który pozwoli na odebranie danych z kontekstu:

   ```jsx
   <ThemeContext.Consumer>
       {(theme) => (
         // Komponenty które mają mieć dostęp do danych kontekstu, czyli do theme
       )}
   </ThemeContext.Consumer>
   ```

   Bezpośrednio w ramach komponentu `Consumer` przekazujemy całą definicję funkcji, gdzie w parametrze mamy dostęp do danych trzymanych w kontekście (tutaj `theme`). Wartością zwracaną z tej funkcji są komponenty które mają mieć dostęp do danych.

3. Umieszczamy wybrane komponenty które chcemy aby wykorzystały dane z kontekstu wewnątrz komponentu `Consumer`:

   ```jsx
   <button
     style={{
       background: theme.light.background,
       color: theme.light.foreground,
     }}
   >
     Click me!
   </button>
   ```

#### [scenariusz z użyciem *hooka*] Odbiór danych (utworzenie _Consumera_)

W komponencie który ma odbierać dane kontekstu należy:

1. Zaimportować _hooka_ do obsługi kontekstu:

   ```jsx
   import { useContext } from 'react'
   ```

2. Zaimportować kontekst z miejsca, gdzie był definiowany:

   ```jsx
   import { ThemeContext } from './miejsce/trzymania/kontekstu'
   ```

3. Użyć _hooka_ żeby wyciągnąć wartość z kontekstu (`useContext` przyjmuje
   obiekt kontekstu i zwraca wartość aktualnie przechowywaną w kontekście):

   ```jsx
   const theme = useContext(ThemeContext)
   ```

4. Wykorzystać kontekst, np.:
   ```jsx
   <button style={{ background: theme.background, color: theme.foreground }}>
     Click me!
   </button>
   ```

#### Przykładowe użycie

```jsx
// import bibliotek
import { createContext, useContext } from "react";

// stworzenie obiektu kontekstu
export const ThemeContext = createContext();

// globalny stan
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export default function App() {
  return (
    // provider
    <ThemeContext.Provider value={themes}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// komponent symbolizujący komponenty pośrednie w drzewie
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

// komponent który potrzebuje danych z kontekstu
function ThemedButton() {
  // zasubskrybowanie się na kontekst
  const theme = useContext(ThemeContext);

  return (
    <button
      {/* wykorzystanie danych z kontekstu */}
      style={{
        background: theme.light.background,
        color: theme.light.foreground,
      }}
    >
      Ostylowany z kontekstu
    </button>
  );
}
```

## 🔗 Dokumentacja

[Kontekst (provider) w dokumentacji React](https://pl.reactjs.org/docs/context.html)

[Kontext (hook, consumer) w dokumentacj React](https://pl.reactjs.org/docs/hooks-reference.html#usecontext)

## ⛏️ Część praktyczna

Zadania zostały wydzielone do osobnego pliku, celem rozdzielenia części teoretycznej od praktycznej.

[⤵️ Zadania](./exercises.md)
