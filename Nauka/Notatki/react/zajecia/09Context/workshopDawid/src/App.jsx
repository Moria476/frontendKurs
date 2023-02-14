import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import { createContext } from "react";
export const TextContext = createContext();
const newText = "Button z contextu";
function App() {
  // const [text, setText] = useState("Button from state");
  return (
    <>
      <TextContext.Provider value={newText}>
        {/* <Header text={text}></Header> */}
        <Header></Header>
      </TextContext.Provider>
    </>
  );
}

export default App;
