import { SearchBar, SearchBarContainer } from "./SearchBar.styled";
import { Input } from "../ui/Input/Input.component";
import Button from "../ui/Button/Button.styled";

const Search = () => {
	return (
		<SearchBarContainer>
			<SearchBar>
				<Input
					placeholder="Filter by title, companies, expertise..."
					imgUrl="../../../public/assets/desktop/icon-search.svg"
				/>
				<Button>Search</Button>
			</SearchBar>
		</SearchBarContainer>
	);
};

export default Search;
