import {
  ToDoItemContainer,
  ToDoItemText,
  MarkToDo,
  RemoveToDo,
  ButtonWrapper,
} from "./ToDoItem.styled";

const ToDoItem = ({ text }) => {
  return (
    <ToDoItemContainer>
      <ToDoItemText value={text} />
      <ButtonWrapper>
        <RemoveToDo>
          <img src="../../../public/jean_victor_balin_cross.png" />
        </RemoveToDo>
        <MarkToDo type="checkbox" />
      </ButtonWrapper>
    </ToDoItemContainer>
  );
};
export default ToDoItem;
