import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  background-color: #f8513d;
  width: 100%;
  height: 5rem;
  border-radius: 15px 15px 0px 0px;
  align-items: center;
`;

export const NavButton = styled.button`
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 5%; // virkar ekki
  background-color: white;
  border: 1px solid black;
  border-radius: 16px;
  width: 150px;
  padding: 10px 0;

  &:hover {
    color: white;
    background-color: black;
  }
`;
