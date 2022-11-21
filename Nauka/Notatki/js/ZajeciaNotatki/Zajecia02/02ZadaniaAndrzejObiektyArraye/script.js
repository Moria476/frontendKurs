// Zadanie 1.
const ticktacktoe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "**", "o"],
];

// Zadanie 2.

// Zadanie 3.
const values = [
  [],
  {},
  -10,
  1,
  0,
  "",
  "full string",
  " ",
  undefined,
  NaN,
  null,
  "0️⃣",
  "💩",
];
values.forEach((element) => {
  if (element) {
    console.log(`${element} == truthy`);
  } else {
    console.log(`${element} == falsy`);
  }
});

// Zadanie 4.

//Napisz funkcję `check()`, która przyjmuje w parametrze tablicę - w zależności od długości tablicy - funkcja powinna zwrócić //odpowiedni string z kolorem:

//- 1 = "#green"
//- 2 = "#red"
//- 3 = "#blue"
//- Każdy inny = "#black"

//Użyj `switch` statement.

// Zadanie 5.

// Zadanie 6.
const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// Zadanie 7.
const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];

// Zadanie 8.
function longestString() {}

// Zadanie 9.
const usersFavColors = [
  ["red", "blue"],
  ["green", "red", "yellow"],
  ["black", "blue"],
  ["pink", "black", "white"],
];

// Zadanie 10.
const comments = [
  { text: "Cool Beans", id: 123 },
  { text: "Love this", id: 133 },
  { text: "Neato", id: 233 },
  { text: "good bikes", id: 333 },
  { text: "so good", id: 433 },
];

function deleteComment(id, comments) {}

// Zadanie 11.

// Zadanie 12.

// Zadanie 13.

// Zadanie 14.

// Zadanie 15.

// Zadanie 16.
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Zadanie 17.

// Zadanie 18.

// Zadanie 19.
const students = [
  { name: "Mariusz", tasksDone: 150, hoursSpent: 160 },
  { name: "Ewelina", tasksDone: 1, hoursSpent: 1 },
  { name: "Alicja", tasksDone: 100, hoursSpent: 80 },
  { name: "Marek", tasksDone: 200, hoursSpent: 40 },
  { name: "Dagmara", tasksDone: 50, hoursSpent: 100 },
];

const requirements = {
  minHoursSpent: 80,
  minTasksDone: 100,
};

// Zadanie 20.

// Zadanie 21.

// Zadanie 22.
const studentGrades = [
  {
    id: 1,
    name: "Jacek",
    grades: [5, 3, 4, 2, 5, 5],
  },
  {
    id: 2,
    name: "Ewa",
    grades: [2, 3, 3, 3, 2, 5],
  },
  {
    id: 3,
    name: "Zygmunt",
    grades: [2, 2, 4, 4, 3, 3],
  },
];

// Zadanie 23.
const idUsers = {
  243: {
    firstName: "Yorker",
    lastName: "Surgey",
    email: "ysurgey0@census.gov",
    jobTitle: "VP Accounting",
  },
  643: {
    firstName: "Lanny",
    lastName: "Sollime",
    email: "lsollime1@flavors.me",
    jobTitle: "VP Quality Control",
  },
  765: {
    firstName: "Cy",
    lastName: "Vautrey",
    email: "cvautrey2@google.cn",
    jobTitle: "Assistant Media Planner",
  },
  17: {
    firstName: "Alfie",
    lastName: "Biggerstaff",
    email: "abiggerstaff3@shop-pro.jp",
    jobTitle: "Project Manager",
  },
  6532: {
    firstName: "Bronnie",
    lastName: "Murrill",
    email: "bmurrill4@mapquest.com",
    jobTitle: "Automation Specialist I",
  },
  11: {
    firstName: "Isiahi",
    lastName: "Dooman",
    email: "idooman5@si.edu",
    jobTitle: "Office Assistant II",
  },
  7907: {
    firstName: "Lizbeth",
    lastName: "Clowney",
    email: "lclowney6@unc.edu",
    jobTitle: "Desktop Support Technician",
  },
  144: {
    firstName: "Lindsey",
    lastName: "Digan",
    email: "ldigan7@bigcartel.com",
    jobTitle: "Technical Writer",
  },
  543: {
    firstName: "Nelly",
    lastName: "Durden",
    email: "ndurden8@amazon.com",
    jobTitle: "Software Test Engineer II",
  },
  444: {
    firstName: "Pascal",
    lastName: "Rosenfrucht",
    email: "prosenfrucht9@hc360.com",
    jobTitle: "GIS Technical Architect",
  },
};
