## Co powinna zawierać aplikacja, jak powinna się zachowywać?

Należy wyświetlić tylko dane z grafiki (czyli klucz `independent`, który zwraca API jest nam tutaj zbędny).

Do pobrania całej listy naley wykorzystać **REST Countries API**:
https://restcountries.com/v2/all?fields=name,capital,flag,population,region

### Wskazówki:

1. Do pobierania danych należy wykorzystać `useEffect` wraz z wbudowaną w JS funkcją 'fetch' (można też skorzystać np z bilbioteki `axios` - dla chętnych, ale nie ma konieczności).
2. Pobrana lista państw powinna być zapisana w stanie (useState) i wyświetlona za pomocą funkcji 'map'. Ustawianie stanu powinno następować w useEffect po poprawnym pobraniu danych.

## Zadania dodatkowe **(20 pkt)**

1. Stworzenie wspomnianego wyżej Loadera - **5 pkt** 'loader' podczas pobierania danych - może to być zwykły tekst 'Loading...', może to być kręciołek,
2. Dodanie wyszukiwarki na stronie, która będzie filtrować flagi po nazwie państwa (zgodnie z designem) - **5 pkt**
3. Dodanie filtrowania w tagu `<select>` po regionach (zgodnie z designem) - **10 pkt**

## Termin:

03.02.2023 (do północy)
