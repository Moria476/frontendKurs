import { nanoid } from "./node_modules/nanoid/nanoid.js";

// import { nanoid } from "nanoid"; // with bundler

const user = {
  id: nanoid(),
  name: "joe",
};

console.log(user);
