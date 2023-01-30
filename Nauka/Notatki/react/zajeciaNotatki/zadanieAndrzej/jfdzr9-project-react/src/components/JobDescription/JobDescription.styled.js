import styled from "styled-components";

export const JobDescriptionSection = styled.section`
  width: min(80rem, 100%);
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-elements);
  border-radius: var(--border-radius-s);
  padding: 4.8rem;
  margin-top: 3rem;
  margin-bottom: 10rem;
  gap: 4rem;
  transition: 0.2s linear;

  @media (max-width: 48.12em) {
    padding: 3rem;

    button {
      width: 100%;
    }
  }

  h3 {
    margin-bottom: 2rem;
  }

  ul,
  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    li {
      display: flex;
      position: relative;
    }
  }
`;

export const JobDescriptionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 48.12em) {
    flex-direction: column;
    align-items: stretch;
    gap: 6rem;
  }
`;

export const JobInfos = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.2rem;
`;

export const JobInfosDivider = styled.span`
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 100%;
  background-color: var(--color-dark-grey);
`;

export const JobDescriptionPosition = styled.h1`
  padding: 0.8rem 0;
`;

export const JobItemsDots = styled.span`
  position: relative;
  display: inline-block;
  flex: 0 0 3rem;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    left: 0;
    top: 1rem;
    border-radius: 100%;
    background-color: var(--color-dark-grey);
  }
`;

export const JobItemsNumbers = styled.span`
  position: relative;
  display: inline-block;
  flex: 0 0 3rem;
  color: var(--color-violet);
  font-weight: 700;
`;
