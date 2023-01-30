import Layout from "./components/Layout/Layout.component";
import SearchBar from "./components/SearchBar/SearchBar.component";
import { FilterByRegion } from "./components/FilterByRegion/FilterByRegion.component";
import CountryCardList from "./components/CountryCardList/CountryCardList.component";
import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
function App() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  //const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCountries = () => {
    axios.get(`${baseUrl}`).then((response) => {
      const allCountries = response.data;
      setCountries(allCountries);
      setTimeout(() => {
        setLoading(true);
      }, "3000");
    });
  };

  useEffect(() => getCountries(), []);

  // OLD WAY FETCHING DATA
  // useEffect(() => {
  // 	const fetchData = async () => {
  // 		const response = await fetch(`${baseUrl}`);
  // 		const newData = await response.json();
  // 		setData((prevData) => [...prevData, ...newData]);
  // 	};
  // 	fetchData();
  // }, []);
  const filterData = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(query.toLowerCase()) &&
      country.region.toLowerCase().includes(filter.toLowerCase())
    );
  });
  return (
    <Layout loading={loading}>
      <div className="top__wrapper">
        <SearchBar query={query} setQuery={setQuery} />
        <FilterByRegion filter={filter} setFilter={setFilter} />
      </div>
      <div>
        <CountryCardList countries={filterData} />
      </div>
    </Layout>
  );
}
export default App;
