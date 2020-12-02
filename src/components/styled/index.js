import styled from "styled-components";

export const BackBtn = styled.button`
  font-family: sans-serif;
  color: black;
  width: 84px;
  height: 67px;
  background-color: black;
  background-image: url("https://svgshare.com/i/RzB.svg");
  background-repeat: no-repeat;
`;

export const SortContainer = styled.div`
  background-color: red;
`;

export const SortButton = styled.button`
  font-family: sans-serif;
  font-size: 12px;
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
