import Layout from "./components/Layout/Layout.component";
import ToDoInput from "./components/ToDoInput/ToDoInput.component";
import FilterInput from "./components/FilterInput/FilterInput.component";
import { ToDoList } from "./components/ToDoList/ToDoList.styled";
import ToDoItem from "./components/ToDoItem/ToDoItem.component";
function App() {
	return (
		<Layout>
			<ToDoInput />
			<FilterInput />
			<ToDoList>
				<ToDoItem />
				<ToDoItem />
				<ToDoItem />
				<ToDoItem />
				<ToDoItem />
				<ToDoItem />
			</ToDoList>
		</Layout>
	);
}
export default App;
