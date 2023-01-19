import styled from "styled-components";

export const Toggle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.2rem;
`;

export const ToggleButton = styled.button`
	width: 4.8rem;
	height: 2.4rem;
	border-radius: var(--border-radius-m);
	position: relative;
	background-color: var(--color-white);
	transition: 0.2s linear;

	:active {
		transform: scale(0.9);
	}

	::before {
		content: "";
		display: absolute;
		width: 1.4rem;
		height: 1.4rem;
		background-color: var(--color-violet);
		border-radius: 100%;
		position: absolute;
		top: 50%;
		left: 0.5rem;
		transform: translateY(-50%);
		transition: 0.2s linear;

		[data-active-theme="light"]::before {
			transform: translateY(-50%) translateX(0);

			[data-active-theme="dark"]::before {
				transform: translateY(-50%) translateX(165%);
			}
		}
	}
`;
