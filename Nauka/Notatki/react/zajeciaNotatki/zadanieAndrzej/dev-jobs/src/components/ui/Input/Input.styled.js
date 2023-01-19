import styled from "styled-components";

export const InputField = styled.input`
	flex-grow: 1;
	font-size: var(--font-size-body);
	color: var(--color-text);
	padding: 1rem;
	border-radius: var(--border-radius-xs);
	overflow: hidden;

	::placeholder {
		color: #8c8f96;
	}
`;

export const InputLabel = styled.label`
	position: relative;
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: var(--padding-search-bar-items);
	min-width: 20rem;

	[for="filterByInfos"] {
		flex-grow: 3;
	}

	[for="filterByLocation"] {
		flex-grow: 1;
	}
`;
