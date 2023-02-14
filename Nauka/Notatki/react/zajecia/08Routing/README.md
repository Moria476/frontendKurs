# <a href='https://infoshareacademy.com/'><img src='https://infoshareacademy.com/wp-content/themes/infoshare/src/images/logo.svg' height='60' alt='infoShare Academy Logo' aria-label='https://infoshareacademy.com/' /></a>

# React - Routing Workshop at infoShare Academy

👨‍🏫 Dominik Młynarczyk | 📧 [hello@dominikmlynarczyk.com](mailto:hello@dominikmlynarczyk.com)

## Garść linków na dzień dobry 🧐

- [Szybkie wprowadzenie do routingu z użyciem React Router](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
- [Deep dive - głębsze zrozumienie koncepcji routingu](https://reactrouter.com/docs/en/v6/getting-started/concepts)
- [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) - API przeglądarki wykorzystywane pod maską kiedy chcemy zaimplementować aplikację *SPA*

# 👴 Routing kiedyś...

Kiedy nie było istniały tzw. aplikacje SPA (single page applications), wszystkie strony internetowe były po prostu "połączonymi ze sobą" plikami `.html`, kiedy to po kliknięciu w link następowało całkowite przeładowanie strony.

Przykład:

1. Otworzyć https://www.cfg.com/ w przeglądarce
2. Otworzyć Network Tab i wyczyścić wszystkie dotychczasowe requesty
3. Kliknąć w menu po lewej stronie, np w "General"
4. Zauważyć ile requestów i z jakim contentem jest ładowanych do przeglądarki
5. Zauważyć zmianę url na https://www.cfg.com/info.html

## Problemy klasycznego podejścia

Takie podejście ma kilka wad, np:

- ładowanie tego samego wiele razy
  - np menu jest takie samo, ale każdy plik musi zdefiniować html i css dla niego
  - utracenie stanu (resetowanie trwających animacji)
- angażowanie backendu czasem tylko po to, by zmienić mały fragment ekranu

# 👶 Single Page Applications

Aby wyeliminować powyższe, zaczęto rozwijać aplikacje w JavaScript, które po stronie klienta aktualizują tylko wybrane fragmenty, np:

- zmianę zaznaczenia aktywnej pozycji w menu
- wymianę tylko głównego contentu strony na inny (bez zmiany np. stopki / nawigacji)

Niestety, ręczna dynamiczna ingerencja w stan aplikacji nie oznacza, że to, gdzie jesteśmy w aplikacji (np. jaka jest aktywna podstrona) jest automatycznie odwzorowywane w pasku przeglądarki (adresie URL).

## 📖 History API

Do przeglądarek wprowadzono tzw. [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API), które pozwala na komunikację z przeglądarką, informując ją, że właśnie zmieniliśmy podstronę (w między czasie modyfikując wybraną sekcję drzewa DOM).

Niestety mamy tutaj pełną odpowiedzialność kiedy i jak zmieniać zawartość paska przegądarki.

Nie chcemy robić tego sami, tym bardziej, że w React piszemy kod deklaratywny (określamy czego oczekujemy), a nie imperatywny (określamy co muszę zrobić, aby osiągnąć oczekiwany efekt).

## 🗺 React-Router

Z pomocą przychodzi nam biblioteka [React Router](https://reactrouter.com/docs/en/v6), która pozwala zgrabnie zarządzać zmianą zawartości paska adresu, oraz deklarować, jaki komponent ma się wyświetlać na jakiej stronie.

# ⛏️ Część praktyczna

Zadania w ramach tych warsztatów dostępne są [*tutaj*](./exercises.md).