import styled from "styled-components";

export const ToDoItemContainer = styled.div`
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  align-items: center;
`;
export const MarkToDo = styled.input`
  margin: 0px 10px;
  width: 15px;
  height: 15px;

  background-color: black;

  :checked {
    background-color: green;
  }
  border: 2px solid;
`;

export const RemoveToDo = styled.button`
  margin: 0px 10px;
  width: 15px;
  height: 15px;
  img {
    width: 15px;
    height: 15px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const ToDoItemText = styled.input`
  font-size: 2rem;
`;
