import {
  CountryCardStyled,
  CountryFlag,
  CountryInfo,
  CountryInfoWrapper,
  CountryName,
  CountryInfoPrefix,
} from "./CountryCard.styled";

const CountryCard = ({ country }) => {
  return (
    <CountryCardStyled>
      <CountryFlag src={country.flag} />
      <CountryName>{country.name}</CountryName>
      <CountryInfoWrapper>
        <div>
          <CountryInfoPrefix>Population:</CountryInfoPrefix>
          <CountryInfo> {country.population}</CountryInfo>
        </div>
        <div>
          <CountryInfoPrefix>Region:</CountryInfoPrefix>
          <CountryInfo> {country.region}</CountryInfo>
        </div>
        <div>
          <CountryInfoPrefix>Capital:</CountryInfoPrefix>
          <CountryInfo> {country.capital}</CountryInfo>
        </div>
      </CountryInfoWrapper>
    </CountryCardStyled>
  );
};

export default CountryCard;
