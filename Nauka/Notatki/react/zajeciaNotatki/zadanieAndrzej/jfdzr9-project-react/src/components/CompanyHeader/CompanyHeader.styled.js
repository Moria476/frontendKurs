import styled from "styled-components";

export const CompanyHeaderSection = styled.section`
  width: min(80rem, 100%);
  display: flex;
  background-color: var(--background-color-elements);
  border-radius: var(--border-radius-s);
  overflow: hidden;
  transition: 0.2s linear;

  @media (max-width: 48.12em) {
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
`;

export const CompanyHeaderInfos = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  h2 {
    margin-bottom: 0.8rem;
  }

  @media (max-width: 48.12em) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
    padding-top: 6.5rem;
  }
`;
