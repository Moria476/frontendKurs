import styled from "styled-components";

export const ToDoItemContainer = styled.div`
	padding: 1rem 3.2rem 3.2rem;
	position: relative;
	opacity: 1;
	::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: calc(100% - 3.5rem);
		background-color: var(--background-color-elements);
		border-radius: var(--border-radius-s);
		transition: 0.2s linear;
	}
	> * {
		position: relative;
	}
`;
export const MarkToDo = styled.button``;

export const RemoveToDo = styled.button``;

export const ToDoItemText = styled.p``;
