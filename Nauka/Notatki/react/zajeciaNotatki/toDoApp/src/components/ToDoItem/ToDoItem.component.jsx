import {
  ToDoItemContainer,
  ToDoItemText,
  MarkToDo,
  RemoveToDo,
  ButtonWrapper,
} from "./ToDoItem.styled";

const ToDoItem = ({ value, setData, keyToRemove }) => {
  const removeButton = () => {
    setData((prevData) =>
      prevData.filter((toDo, index) => {
        return index !== keyToRemove;
      })
    );
  };
  return (
    <ToDoItemContainer>
      <ToDoItemText value={value} readOnly />
      <ButtonWrapper>
        <RemoveToDo onClick={removeButton}>
          <img src="../../../public/jean_victor_balin_cross.png" />
        </RemoveToDo>
        <MarkToDo type="checkbox" />
      </ButtonWrapper>
    </ToDoItemContainer>
  );
};
export default ToDoItem;
