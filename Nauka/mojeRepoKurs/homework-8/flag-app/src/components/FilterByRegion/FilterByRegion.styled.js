import styled from "styled-components";

export const Dropbtn = styled.button`
  padding: 10px;
  display: inline;
  width: 115px;
`;
export const Dropdown = styled.div`
  @media (max-width: 450px) {
    justify-self: center;
  }
  position: relative;
  background-color: var(--background-color-elements);
  width: 150px;
  padding: 5px 0px;
  cursor: pointer;
  :before,
  :after {
    padding: auto;
  }
`;

export const DropdownContent = styled.ul`
  position: absolute;
  list-style-type: none;
  margin: 5px 0;
  padding: 0;
  border: 1px solid grey;
  width: 150px;
`;
export const DropdownContentLi = styled.li`
  margin: 0;
  background-color: var(--background-color-elements);
  padding: 0 5px;
  :hover {
    background-color: lightgray;
  }
`;

export const DropdownContentButton = styled.button`
  width: 100%;
  height: 100%;
  text-align: left;
  background: none;
  color: inherit;
  border: none;
  padding: 5px;
  margin: 0;
  font: inherit;
  cursor: pointer;
`;

export const DropSVG = styled.svg`
  width: 25px;
  height: 25px;
  margin: 2px 0px 0px 0px;
  display: inline;
  position: absolute;
  fill: black;
`;
