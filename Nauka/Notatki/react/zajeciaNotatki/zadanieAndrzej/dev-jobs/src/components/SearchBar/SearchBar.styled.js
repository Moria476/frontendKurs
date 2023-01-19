import styled from "styled-components";

export const SearchBarContainer = styled.form`
	width: 100%;
	position: relative;
`;
export const SearchBar = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--background-color-elements);
	border-radius: var(--border-radius-s);
	padding-right: 1.6rem;
	transition: 0.2s linear;
`;