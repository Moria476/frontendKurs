// 1. Stwórz własny obiekt typu Promise, który zakończy się sukcesem po 10 sekundach.
// console.log("Poczatek")

const ourPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Jestem Jan');
  }, 10000)
})

console.log(ourPromise)

ourPromise.then((result) => {
  console.log(result);
}).catch(() => {
  console.log('Byl blad')
})



// 2. Analogicznie do zadania 1. stwórz Promise, który zakończy się porażką po 10 sekundach





// 3. Napisz funkcję, która zwraca nowy obiekt promise.
// Funkcja będzie przyjmowała dowolną wartość liczbową.
// Promise będzie kończył się sukcesem, jeśli przekazana liczba jest większa niz 10,
// jeśli jest mniejsza, Promise będzie kończył się porażką.







// 4. Napisz 3 niezalezne od siebie promise,
// ktore zakoncza sie sukcesem po 1 sekundzie, 5 sekundach i trzeci po 10 sekundach.
// Poczekaj na zakonczenie wszystkich trzech promisow i wyswietl na
// kosoli wyniki tych promisów







// 5. Promise można wykorzystywać na wiele sposobów. Można też wykorzystać Promise,
// aby poczekać na jakąś interakcje z użytkownikiem.
// Np. stwórz Promise, który przejdzie w stan fulfilled dopiero, jak user przyciśnie
// określony przycisk.

//* Możesz też dodać limit czasu na kliknięcie, np jeśli user nie kliknie w ciągu 3 sekund,
// Promise zostanie rejected




