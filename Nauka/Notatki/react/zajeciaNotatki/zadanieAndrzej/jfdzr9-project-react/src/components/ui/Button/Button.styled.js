import styled from "styled-components";

const Button = styled.button`
  font-size: var(--font-size-body);
  font-weight: 700;
  border-radius: var(--border-radius-xs);
  padding: 1.6rem;
  text-transform: capitalize;
  transition: 0.2s linear;
  color: ${(props) => (props.secondary ? "var(--color-btn-2)" : "var(--color-white)")};
  background-color: ${(props) => (props.secondary ? "var(--background-color-btn-2)" : "var(--color-violet)")};
  width: ${({ wide }) => wide && "14rem"};
  margin-top: ${({ marginTop }) => marginTop && "4rem"};
  margin-bottom: ${({ marginBottom }) => marginBottom && "4rem"};

  :hover {
    background-color: ${({ secondary }) =>
      secondary ? "var(--background-color-btn-2-hover)" : "var(--color-light-violet)"};
  }
`;

export default Button;
