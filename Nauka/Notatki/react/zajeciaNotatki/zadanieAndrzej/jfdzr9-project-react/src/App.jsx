import Button from "./components/ui/Button/Button.styled";
import { SingleCard } from "./components/SingleCard/SingleCard.component";
import Layout from "./components/Layout/Layout.component";
import SearchBar from "./components/SearchBar/SearchBar.component";
import JobList from "./components/JobList/JobList.component";
import { useEffect, useState } from "react";
import apiData from "./api/index.endpoint";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      apiData().then((response) => setData((prevData) => [...prevData, ...response]));
    };
    fetchData();
  }, []);

  const filteredData = data.filter((job) => {
    return job.position.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <Layout>
      <SearchBar query={query} setQuery={setQuery} />
      <JobList jobs={filteredData} />

      <Button wide marginTop marginBottom>
        Load more
      </Button>
    </Layout>
  );
}
export default App;
