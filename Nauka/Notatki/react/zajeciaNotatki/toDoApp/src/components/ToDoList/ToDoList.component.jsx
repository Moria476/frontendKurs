import { ToDoListStyle } from "./ToDoList.styled";
import ToDoItem from "../ToDoItem/ToDoItem.component";

const ToDoList = ({ toDo, setData }) => {
	return (
		<ToDoListStyle>
			{toDo.map((toDo, index) => (
				<ToDoItem
					key={index}
					value={toDo}
					setData={setData}
					keyToRemove={index}
				/>
			))}
		</ToDoListStyle>
	);
};
export default ToDoList;
