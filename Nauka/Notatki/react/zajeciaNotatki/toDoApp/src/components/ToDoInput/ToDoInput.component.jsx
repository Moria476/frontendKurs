import { ToDoInputField } from "./ToDoInput.styled";
import { ToDoContainer } from "./ToDoInput.styled";
import { Input } from "../ui/Input/Input.component";
import { ButtonComponent } from "../ui/Button/Button.component";
import Button from "../ui/Button/Button.styled";
import { useState } from "react";

const ToDoInput = ({ setData }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  function add() {
    if (inputValue !== "") {
      setData((prevData) => [...prevData, inputValue]);
      setInputValue("");
    }
  }

  return (
    <>
      <h3>Dodaj TO DOsa</h3>
      <ToDoContainer>
        <ToDoInputField>
          <Input
            placeholder={`write "to do" `}
            onChange={handleChange}
            value={inputValue}
          />
          <ButtonComponent onClick={add} text="Dodaj" />
        </ToDoInputField>
      </ToDoContainer>
    </>
  );
};

export default ToDoInput;
