import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5rem;
`;

export const NavButton = styled.button`
  background-color: white;
  border-radius: 5px;
  width: 50px;
  padding: 10px 50px;
  &:hover {
    color: white;
    background-color: black;
  }
`;
