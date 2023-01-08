import { useState } from "react";
import "./App.css";
import { Nav } from "./component/Nav/Nav.jsx";
import { Main } from "./component/Main/Main.jsx";
import { Card } from "./component/Card/Card.jsx";
import data from "./data.js";

const mapData = data.map((card) => {
  return <Card key={card.id} {...card} />;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Main />
      <section className="cards-list">{mapData}</section>
    </div>
  );
}

export default App;
