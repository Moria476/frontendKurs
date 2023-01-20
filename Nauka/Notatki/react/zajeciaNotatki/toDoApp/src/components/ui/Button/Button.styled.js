import styled from "styled-components";

const Button = styled.button`
	font-size: var(--font-size-body);
	font-weight: 700;
	border-radius: var(--border-radius-xs);
	padding: 1.6rem;
	text-transform: capitalize;
	transition: 0.2s linear;
	color: var(--color-white);
	background-color: magenta;
	border: 2px;
	border-style: solid;
	border-color: black;

	:hover {
		background-color: pink;
	}
`;

export default Button;
