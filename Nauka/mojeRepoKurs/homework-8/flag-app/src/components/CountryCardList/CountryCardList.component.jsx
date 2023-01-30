import CountriesGrid from "./CountryCardList.styled";
import CountryCard from "../CountryCard/CountryCard.component";
const CountryCardList = ({ countries }) => {
  return (
    <CountriesGrid>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </CountriesGrid>
  );
};
export default CountryCardList;
