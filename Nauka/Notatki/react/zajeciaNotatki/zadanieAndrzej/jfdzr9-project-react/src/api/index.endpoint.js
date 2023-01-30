import mockData from "./data.json";

let cursor = -1;
const size = 5;

function delay(time) {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}

export default async function apiData() {
  await delay(1000);
  // Throw Error from API at random moments:
  // if (Math.random() > 0.7) {
  //   throw new Error("Something went wrong");
  // }
  cursor += 1;
  const start = cursor * size;
  const end = cursor * size + size;
  return mockData.slice(start, end);
}
