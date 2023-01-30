import styled, { css } from "styled-components";
const CommonCss = css`
	border-radius: 8px;
	color: #fff;
	font-size: 25px;
	height: 50px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Wrapper = styled.div`
	display: flex;
`;
export const Button = styled.button`
	${CommonCss}
	border: 0;
	background-color: #2571b3;
	height: 50px;
	font-weight: bold;

	transition: all 300ms ease-in;
	&:disabled {
		opacity: 0.3;
	}
`;

export const CounterBox = styled.div`
	${CommonCss}
	padding: 13px 32px;
	background-color: #4b4b4b;
	margin: 0 30px;
`;
