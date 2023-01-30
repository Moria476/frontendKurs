# Routing

### Przydatne linki

1. [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) - MDN do history API
2. [React Router](https://reactrouter.com/en/main/start/tutorial)- Dokumentacja biblioteki React Router
3. [React Router Tutorial](https://www.geeksforgeeks.org/reactjs-router) - Tutorial do react router'a

## Routing w dawnych czasach

Kiedy nie było Aplikacji SPA (single page applications), wszystkie strony internetowe były po prostu
połączonymi ze sobą plikami html, kiedy to po kliknięciu w link następowało całkowite przeładowanie strony i
załadowanie nowego, innego dokumentu HTML.

Przykład:

1. Wejść do katalogu `00-introduction`
2. Uruchomić serwer komendą `npx serve .`
3. Otworzyć http://localhost:3000/ w przeglądarce
4. Otworzyć Network Tab i wyczyścić wszystkie dotychczasowe requesty
5. Kliknąć w menu po prawej stronie, np w "Users"
6. Zauważyć ile requestów i z jakim contentem jest ładowanych do przeglądarki
7. Zauważyć zmianę url na http://localhost:3000/users
8. Odświeżyć stronę i zobaczyć jaki content jest wyświetlany
9. Podczas nawigacji obserwować animację w menu

## Problemy

Takie podejście ma kilka wad, np:

- ładowanie tego samego wiele razy
  - np menu jest takie samo, ale każdy plik musi zdefiniować html i css dla niego
  - utracenie stanu (resetowanie trwających animacji)
- angażowanie backendu czasem tylko po to, by zmienić mały fragment ekranu

## Single Page Applications

Aby wyeliminować powyższe, zaczęto rozwijać aplikacje w JavaScript, które po stronie klienta aktualizują
tylko wybrane fragmenty, np:

- zmien zaznaczenie w menu
- wymień główny content na inny

Niestety, ręczna dynamiczna ingerencja w stan aplikacji nie oznacza, że to, gdzie jesteśmy w aplikacji
(np jaka podstrona) jest automatycznie odwzorowywane w pasku przeglądarki.

## history API

W czasach nowożytnych wprowadzono tzw. History API (https://developer.mozilla.org/en-US/docs/Web/API/History_API), czyli
możliwość powiedzenia przeglądarce, że właśnie zmieniliśmy podstronę, np usuwając stary div i wstawiając nowy

Niestety mamy tutaj pełną odpowiedzialność kiedy i jak zmieniać zawartość paska przegądarki.

Nie chcemy robić tego sami, tym bardziej, że w React piszemy kod deklaratywny (czego oczekuję)
a nie imperatywny (co muszę zrobić, aby osiągnąć oczekiwany efekt).

- Dostępny w:

```javascript
window.history;
```

Przykład użycia

```js
const element = document.getElementById("element");

element.addEventListener("click", function (event) {
  event.preventDefault();

  window.history.pushState(null, null, "/messages");
});
```

Nasłuchiwanie na zmiany adresu (np kliknięcie "wstecz")

```js
window.addEventListener("popstate", (e) => {
  // może warto podświetlić inne menu?
  // może warto wyświetlić inną treść w kontenerze treści?
});
```

- Pozostałe przydatne metody
  - window.history.back()
  - window.history.forward()
  - pozostałe metody do znalezienia w dokumentacji na MDN :)
  - window.location.pathname

### Zadanie

W przykładzie `01-history-api` ładowany jest zawsze jeden plik index.html ()
Po załadowaniu strony podświetlany jest właściwy element menu na podstawie `location.pathname`

1. Wejdź do `01-history-api`
2. Uruchom komendę `npx serve -s` - opcja "-s" spowoduje tzw. _redirect_ do `index.html` - w projekcie jest tylko jeden plik `html`
3. Kliknij w różne elementy menu
   - za każdym razem powinien sie ładować ten sam dokument, ale pod innym adresem URL
   - `highlightCurrentMenu()` powoduje inicjalne podświetlenie właściwego menu niezależnie z jakiego URL został zwrócony
4. Spraw, aby po kliknięciu w dowolny menu item następowała zmiana paska adresu np `localhost:3000/`
   na `localhost:3000/users`

   > ważne: nie przeładowujemy strony!

   > ważne: `window.location.pathname = ...` nie zadziała jak byśmy chcieli

5. Zadbaj o obsługę przycisków `wstecz` oraz `dalej` w pasku narzędzi przeglądarki
6. Spraw, aby po kliknięciu w dowolny menu item pokazać content odpowiedniej strony

## React-Router

Z pomocą przychodzi nam biblioteka react-router, która pozwala zgrabnie zarządzać zmianą zawartości paska adresu,
oraz deklarować, jaki komponent ma się wyświetlać na jakiej stronie.

Dokumentacja: https://reactrouter.com/docs/en/v6

Cechy React-Router

- podstawowe sprawdzanie URL i wyświetlanie na jego podstawie odpowiednich treści
- rodzaje routerów
  - Najważniejsze
    - Browser Router - czyste URLE
      `http://mojastrona.pl/onas
    - Hash Router - wszystkie urle znajdują się za hashem
      `http://mojastron.pl/#onas
  - Poboczne
    - Memory Router - używany do testów
    - Native Router - używany w React Native

### Użycie routera

- `<BrowserRouter>` jest potrzebne tylko jedno na aplikację
- `<Routes>` jest specjalnym elementem grupującym `<Route>`
- `<Route>` deklaruje, że dla ścieżki adresu wskazanej propsem `path` powinniśmy wyrenderować to, co podane w propsie `element`
- ręczna manipulacja historią jest niepotrzebna - biblioteka robi to za nas
- komponent `<Routes>` tworzy swego rodzaju ranking z komponentów - dzieci, i wyświetla [najbardziej pasujący](https://reactrouter.com/en/main/start/overview#ranked-route-matching)

```js
<BrowserRouter>
  <span>dowolna część aplikacji</span>
  <Routes>
    <Route path="books" element={<BooksPage />} />
    <Route path="users" element={<UsersPage />} />
    <Route path="users/invitations" element={<InvitationsPage />} />
  </Routes>
  <span>dowolna część aplikacji</span>
</BrowserRouter>
```

### API do omówienia na przykładach

- `<Routes>`
- `<Route>`
- `useMatch()`
- `useParams()`
- `<Link>`
- `<NavLink>`
- `<Navigate>`
- `useNavigate()`
- `useLocation()`
- `useSearchParams()`

# Zadanie

Przeróbmy poprzednie zadanie tak, aby każda informacji o nawigacji była zawarta w URL:

- `/` będzie kierowało automatycznie do /users (komponent `<Navigate replace to=""/>`)
- `/users` - strona główna
- `/users/1` - zaznaczony user o id 1, wyświetla się koszyk
- `/users/1/products/2` zaznaczony user id 2 oraz produkt id 2, wyświetla się galeria
- `/users/1/products/2/edit` - zamiast galerii wyświetlić formularz edycji
- dla każdego route dać `?search=foo` co oznaczać będzie aktualną wartość pola wyszukiwania

## Wskazówki implementacyjne

- cała nawigacja ma odbywać się poprzez Link lub NavLink
- ładowanie danych można wydzielić do nowych komponentów, które będą renderowane tylko na danej podstronie
- NavLink ma pole className które może przyjąć funkcję - wykorzystajmy ją do ostylowania aktywnej pozycji

## Etapy

- Utworzenie UserListPage
  - włożenie do środka logiki ładowania listy użytkowników i wyświetlania jej
  - umiejscowienie jej w usersColumn
- Utworzenie CartPage
  _ umiejscowienie w cartColumn pod routem `/users/:userId/_`
  - przeniesienie ładowania koszyka i wyświetlenia
  - poleganie na useParams().userId
- Utworzenie ProductPreviewPage
  - umiejscowienie w productColumn pod routem `/users/:userId/products/:productId`
  - przeniesienie w całości logiki ładowania i wyświetlania detali
- Zmiana CartItemEdit
  - umiejscowienie w productColumn pod routem `/users/:userId/products/:productId/edit`
