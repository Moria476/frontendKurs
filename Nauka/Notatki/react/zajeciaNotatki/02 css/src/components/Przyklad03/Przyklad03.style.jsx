import styled from "styled-components";

export const Button = styled.button`
	font-weight: 700;
	background-color: blueviolet;
	color: ${(props) => (props.active ? "red" : "blue")};
`;

export const AlternativeButton = styled(Button)`
	background-color: #2bb7e2;
`;

export const AlternativeButtonWithAttr = styled(Button).attrs({
	type: "input",
})`
	background-color: #2bb7e2;
`;
