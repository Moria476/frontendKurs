import {
	ToDoItemContainer,
	ToDoItemText,
	MarkToDo,
	RemoveToDo,
} from "./ToDoItem.styled";

const ToDoItem = () => {
	return (
		<ToDoItemContainer>
			<ToDoItemText>dasdsad</ToDoItemText>
			<RemoveToDo>X</RemoveToDo>
			<MarkToDo type="checkbox">X</MarkToDo>
		</ToDoItemContainer>
	);
};
export default ToDoItem;
