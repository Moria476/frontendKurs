import React, { useContext } from "react";
import { TextContext } from "../App";
// const Button = ({ text }) => {
const Button = () => {
  const newText = useContext(TextContext);
  return (
    <div>
      Button
      <button>{newText}</button>
    </div>
  );
};
export default Button;
