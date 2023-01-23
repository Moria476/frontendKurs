import Layout from "./components/Layout/Layout.component";
import ToDoInput from "./components/ToDoInput/ToDoInput.component";
import FilterInput from "./components/FilterInput/FilterInput.component";
import { ToDoList } from "./components/ToDoList/ToDoList.styled";
import ToDoItem from "./components/ToDoItem/ToDoItem.component";
import { data } from "./data";

function App() {
  return (
    <Layout>
      <ToDoInput />
      <FilterInput />
      <ToDoList>
        {data.map((toDo) => (
          <ToDoItem key={toDo.id} {...toDo} />
        ))}
      </ToDoList>
    </Layout>
  );
}
export default App;
