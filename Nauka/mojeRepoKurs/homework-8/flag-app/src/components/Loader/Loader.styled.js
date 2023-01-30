import styled from "styled-components";

export const LoaderSVG = styled.svg`
  width: 25px;
  height: 25px;
  margin: 10px;

  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const LoaderScreen = styled.div`
  background-color: var(--color-dark-grey);
  position: absolute;
  z-index: 100;
  opacity: 0.8;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
