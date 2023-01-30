import styled from "styled-components";

export const JobBottomBannerSection = styled.section`
  box-sizing: content-box;
  width: min(80rem, 100%);
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;
  margin: auto 0;

  @media (max-width: 48.12em) {
    flex-direction: column;
    align-items: stretch;

    button {
      width: 100%;
    }
  }
`;
