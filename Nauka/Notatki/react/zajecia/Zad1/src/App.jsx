import { Fragment } from "react";
import reactLogo from "./assets/react.svg";
import Headline from "./components/Headline/Headline";
import LinkImage from "./components/LinkImage/LinkImage";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const array = [
    {
      id: "produkt1",
      name: "Banan2",
      quantity: 3,
      price: 10,
      items: [],
      metadata: {
        whatever: "cokolwiek",
      },
    },
    {
      id: "produkt2",
      name: "Japko",
      quantity: 4,
      price: 12,
      items: [1, 2, 3, 4],
      metadata: {
        whatever: "cokolwiek2",
      },
    },
    {
      id: "produkt3",
      name: "Orzech",
      quantity: 6,
      price: 40,
      metadata: {
        whatever: "cokolwiek3",
      },
    },
  ];

  return (
    <div className='App'>
      {array.map((element) =>
        !element.items ? null : element.items.length === 0 ? (
          <p key={element.id} style={{ color: "red" }}>
            Brak itemsów ziom
          </p>
        ) : (
          <div key={element.id}>
            <p>{element.name}</p>
            <p>{element.quantity}</p>
            <p>{`${element.price} cebulionów`}</p>
            <span>{element.metadata.whatever}</span>
          </div>
        )
      )}

      <>
        <p>{array[0].name}test</p>
        <p>{array[0].quantity}test</p>
        <p>{`${array[0].price} cebulionów test`}</p>
        <span>{array[0].metadata.whatever} testg</span>
      </>

      <div>
        <LinkImage url='https://vitejs.dev' imgSrc='/vite.svg' imgAlt='Vite logo'>
          <p>Dodatkowy string</p>
          <p>Dodatkowy string2</p>
          <p>Dodatkowy string3</p>
        </LinkImage>
        <LinkImage url='https://reactjs.org' imgSrc={reactLogo} imgAlt='React logo' />
      </div>
      <Headline name='Tworzymy pierwszy komponent' />
      <Card className='test' firstTextPart='Edit' codePart='src/App.jsx' secondTextPart='and save to test HMR'>
        Siemano test
      </Card>
      <Card firstTextPart='Edit' codePart='src/App.jsx' secondTextPart='and save to test HMR'>
        Siemano test2
      </Card>
      <Card firstTextPart='Edit' codePart='src/App.jsx' secondTextPart='and save to test HMR'>
        Siemano test3
      </Card>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
