import styled from "styled-components";

export const CompanyLogo = styled.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${({ big }) => (big ? "14rem" : "5rem")};
  background-color: ${({ background }) => background};
  height: ${({ small }) => small && "5rem"};
  border-radius: ${({ small }) => small && "var(--border-radius-l)"};
  margin-bottom: ${({ small }) => small && "2.2rem"};

  img {
    width: 58%;
  }
`;
