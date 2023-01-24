import SearchIcon from "../../assets/desktop/icon-search.svg";
import Button from "../ui/Button/Button.styled";
import {
	SearchBarForm,
	SearchBarSection,
	SearchInput,
} from "./SearchBar.styled";

const SearchBar = ({ query, setQuery }) => {
	return (
		<SearchBarForm>
			<SearchBarSection>
				<SearchInput
					icon={SearchIcon}
					placeholder="Filter by title, companies, expertise..."
					value={query}
					onChange={(event) => {
						setQuery(event.target.value);
					}}
				/>
				<Button wide>Search</Button>
			</SearchBarSection>
		</SearchBarForm>
	);
};

export default SearchBar;
