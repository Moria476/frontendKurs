// import { useRef } from "react";

// const Component = () => {
//   const inputRef = useRef();
//   const inputRef2 = useRef();
//   const inputRef3 = useRef();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("inputRef", inputRef);
//     console.log("inputRef2", inputRef2);
//     console.log("inputRef3", inputRef3);

//     console.log("Search", inputRef.current.value);
//   };

//   console.log("wartosc pola to:");

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Podaj wartość: <input ref={inputRef} defaultValue="WITAJ!!!!!" />
//       </label>
//       <button ref={inputRef2} type="submit">
//         Szukaj
//       </button>
//       <button
//         ref={inputRef3}
//         type="button"
//         onClick={() => {
//           inputRef.current.value = "hello";
//         }}>
//         Resetuj
//       </button>
//     </form>
//   );
// };

// export default Component;
import { useRef, useState } from "react";

const Component = () => {
  const [text, setText] = useState("Witaj!!!!");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Search", text);
  };

  console.log("wartosc pola to:", text);

  const handleChange = (event) => setText(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Podaj wartość:
        <input
          placeholder="wpisz wartość..."
          value={text}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Szukaj</button>
      <button
        type="button"
        onClick={() => {
          setText("");
        }}>
        Resetuj
      </button>
    </form>
  );
};

export default Component;
