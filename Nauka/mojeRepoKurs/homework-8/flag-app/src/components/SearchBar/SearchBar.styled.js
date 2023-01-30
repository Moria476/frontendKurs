import styled from "styled-components";

export const SearchInput = styled.input`
  flex-grow: 1;
  color: var(--color-text);
  padding: 1rem;
  border-radius: var(--border-radius-xs);
  overflow: hidden;
  padding: 10px;
  ::placeholder {
    color: #8c8f96;
  }
`;
export const SearchBarForm = styled.form`
  position: relative;
`;
export const SearchBarSection = styled.section`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color-elements);
  border-radius: var(--border-radius-s);
  transition: 0.2s linear;
`;
