import styled from "styled-components";

export const FilterInputContainer = styled.form`
	margin: 20px;
	width: auto;
	position: relative;
	border-width: 1px;
	border-color: black;
	border-style: solid;
	border-radius: 5px;
`;
export const FilterInputField = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--background-color-elements);
	border-radius: var(--border-radius-s);
	padding-right: 1.6rem;
	transition: 0.2s linear;
`;
