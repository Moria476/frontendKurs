import Layout from "./components/Layout/Layout.component";
import ToDoInput from "./components/ToDoInput/ToDoInput.component";
import FilterInput from "./components/FilterInput/FilterInput.component";
import ToDoList from "./components/ToDoList/ToDoList.component";
import ToDoItem from "./components/ToDoItem/ToDoItem.component";
import { useState } from "react";

function App() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");

	const filteredData = data.filter((toDo) => {
		return toDo.includes(query);
	});

	return (
		<Layout>
			<ToDoInput setData={setData} />
			<FilterInput query={query} setQuery={setQuery} />
			<ToDoList toDo={filteredData} setData={setData}></ToDoList>
		</Layout>
	);
}
export default App;
