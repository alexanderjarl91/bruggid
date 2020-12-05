import styled from "styled-components";

export const BackBtn = styled.button`
  font-family: sans-serif;
  color: black;
  width: 84px;
  height: 67px;
  margin-right: 1rem;
  background-color: #2a2a2a;
  background-image: url("https://svgshare.com/i/S2b.svg");
  background-repeat: no-repeat;
  z-index: 999;
  &:hover {
    cursor: pointer;
  }
`;

export const SortContainer = styled.div`
  text-align: center;

  width: 80%;
  margin: 1rem auto;
`;

export const MainSortButton = styled.button`
  outline: inherit;
  background-color: white;
  border-radius: 15px 15px 0px 0px;
  width: 100%;
  padding: 10px 0px;
  text-align: left;
`;

export const SortButtonsContainer = styled.div`
  background-color: ${(props) => props.theme.accent};
  border-radius: 0px 0px 15px 15px;
`;

export const SortButton = styled.button`
  font-family: "Rubik", sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: black;
  width: 50px;
  background-color: #f9f9f9;
  border: none;
  border-radius: 5px;
  margin: 0.5rem;
  padding: 4px 7px;
  outline: black;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

export const SortButtonStuff = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
`;

export const SortButtonText = styled.p`
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  font-weight: bold;
`;
