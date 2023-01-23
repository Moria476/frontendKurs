import Button from "./Button.styled";

export const ButtonComponent = ({ text, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {text}
    </Button>
  );
};
