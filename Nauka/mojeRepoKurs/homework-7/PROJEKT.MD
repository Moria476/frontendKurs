# 🎉 Projekty

**💡 UWAGA:** W swoim prywatnym repo utwórz katalog `js-final-project` w którym umieścisz rozwiązanie do projektu.

## 🎉 Projekt - Github Profiles **(100 pkt)**

Twoim zadaniem będzie pobranie danych z GitHuba. API Githuba dostępne jest pod następującym URI: https://api.github.com/users/

Aby pobrać dane konkretnego użytkownika ścieżka wygląda następująco: https://api.github.com/users/USER_NAME (w miejsce `USER_NAME` wstaw nazwę konta GitHub). Pobierz następujące dane z konta:

- Imię i nazwisko użytkownika
- Opis konta (jeśli go nie ma to wyświetl "Description not provided")
- Ilość obserwujących, obserwatorów oraz ilość publicznych repozytoriów
- Listę kilku publicznych repozytoriów danego użytkownika z linkiem do niego

Dodatkowo aplikacja powinna oferować możliwość wyszukania konta Github dowolnej osoby i sprawdzenia informacji o danym koncie.

Przykład:

![img](./github-profiles.gif)

Projekt stworzony przez trenera infoShare Academy - Dominika Młynarczyka 👏

## Zadanie dodatkowe **(30 pkt)**

Zamiast umieszczać całą logikę aplikacji w jednym pliku `index.js`, stwórz aplikację "w stylu reactowym", poznanym na ostatnich zajęciach. Śmiało wzoruj się projektem Rick and Morty:
[Rick and Morty app](https://github.com/infoshareacademy/jfdzr9-project-javascript/tree/main/javascript-modules)

Wydzielaj komponenty do osobnych modułów, importuj/eksportuj dane, dziel logikę aplikacji na komponenty, które odpowiadają tylko za wygląd (ui), za mapowanie danych (list), funkcje pomocnicze umieszczaj w folderze 'utils' itd itp.
