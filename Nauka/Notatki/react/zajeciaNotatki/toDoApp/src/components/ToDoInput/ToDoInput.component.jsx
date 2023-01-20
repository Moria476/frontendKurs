import { ToDoInputField } from "./ToDoInput.styled";
import { ToDoContainer } from "./ToDoInput.styled";
import { Input } from "../ui/Input/Input.component";
import Button from "../ui/Button/Button.styled";

const ToDoInput = () => {
	return (
		<>
			<h3>Dodaj TO DOsa</h3>
			<ToDoContainer>
				<ToDoInputField>
					<Input placeholder={`write "to do" `} />
					<Button>Dodaj</Button>
				</ToDoInputField>
			</ToDoContainer>
		</>
	);
};

export default ToDoInput;
