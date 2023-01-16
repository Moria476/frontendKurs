import styled from "styled-components";

export const Link = styled.a`
  padding: 10px;
  background-color: orange;
  color: ${(props) => (props.$active ? "red" : "pink")};
`;

export const AlternativeLink = styled(Link).attrs({
  target: "_blank",
})`
  color: purple;
  padding: 20px;
  background-color: white;
`;
