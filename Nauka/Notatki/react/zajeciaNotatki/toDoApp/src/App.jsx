import Layout from "./components/Layout/Layout.component";
import ToDoInput from "./components/ToDoInput/ToDoInput.component";
import FilterInput from "./components/FilterInput/FilterInput.component";
import { ToDoList } from "./components/ToDoList/ToDoList.styled";
import ToDoItem from "./components/ToDoItem/ToDoItem.component";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  // const filteredData = data.filter((toDo) => {
  //   console.log(toDo.value);
  //   return toDo.value.includes(query.value);
  // });
  // filteredData;
  return (
    <Layout>
      <ToDoInput setData={setData} />
      <FilterInput />
      <ToDoList>
        {data.map((toDo, index) => (
          <ToDoItem
            key={index}
            value={toDo}
            setData={setData}
            keyToRemove={index}
          />
        ))}
      </ToDoList>
    </Layout>
  );
}
export default App;
