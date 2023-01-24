import Layout from "./components/Layout/Layout.component";
import SearchBar from "./components/SearchBar/SearchBar.component";
import { FilterByRegion } from "./components/FilterByRegion/FilterByRegion.component";
import { CountryCardList } from "./components/CountryCardList/CountryCardList.component";
import { Loader } from "./components/Loader/Loader.component";

function App() {
	// const [data, setData] = useState([]);
	// const [query, setQuery] = useState("");

	// useEffect(() => {
	//   const fetchData = async () => {
	// 	apiData().then((response) => setData((prevData) => [...prevData, ...response]));
	//   };
	//   fetchData();
	// }, []);

	// const filteredData = data.filter((job) => {
	//   return job.position.toLowerCase().includes(query.toLowerCase());
	// });

	return (
		<Layout>
			<main>
				<div>
					<SearchBar />
					<FilterByRegion />
				</div>
				<div>
					<CountryCardList />
					<Loader />
				</div>
			</main>
		</Layout>
	);
}
export default App;
