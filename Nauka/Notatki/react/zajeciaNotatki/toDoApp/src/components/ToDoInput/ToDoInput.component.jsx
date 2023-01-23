import { ToDoInputField } from "./ToDoInput.styled";
import { ToDoContainer } from "./ToDoInput.styled";
import { Input } from "../ui/Input/Input.component";
import Button from "../ui/Button/Button.styled";
import { useState } from "react";
import { data } from "../../data";

const ToDoInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };
  function add() {
    if (inputValue !== "") {
      console.log(inputValue);
      data.push(inputValue);
    }
  }
  return (
    <>
      <h3>Dodaj TO DOsa</h3>
      <ToDoContainer>
        <ToDoInputField>
          <Input placeholder={`write "to do" `} onChange={handleChange} />
          <Button onClick={add}>Dodaj</Button>
        </ToDoInputField>
      </ToDoContainer>
    </>
  );
};

export default ToDoInput;
