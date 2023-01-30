import {
  SearchBarForm,
  SearchBarSection,
  SearchInput,
} from "./SearchBar.styled";

const SearchBar = ({ query, setQuery }) => {
  return (
    <SearchBarForm>
      <SearchBarSection>
        <img src="/magnifying-glass-solid.svg" width="25px" height="25px" />
        <SearchInput
          placeholder="Search for a country..."
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </SearchBarSection>
    </SearchBarForm>
  );
};

export default SearchBar;
