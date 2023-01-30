import styled from "styled-components";

export const CountryCardStyled = styled.article`
  background-color: var(--background-color-elements);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  justify-self: center;
  max-width: 185px;
  @media (max-width: 500px) {
    width: auto;
  }
`;

export const CountryFlag = styled.img`
  width: 100%;
  height: 125px;
`;

export const CountryInfo = styled.span`
  font-size: 0.7rem;
`;
export const CountryInfoPrefix = styled.span`
  font-weight: 800;
  font-size: 0.7rem;
`;

export const CountryInfoWrapper = styled.div`
  background-color: var(--color-white);
  padding: 10px 20px;
`;

export const CountryName = styled.h3`
  padding: 10px 20px;
  font-size: 1.2rem;
  margin: 0;
`;
