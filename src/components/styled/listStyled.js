import styled from "styled-components";

export const ListItem = styled.div`
  display: flex;
  background: white;
  width: 100vw;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  &:hover {
    background-color: gray;
  }
`;

export const ListImage = styled.img`
  width: 50px;
  height: auto;
  margin: 1rem;
`;

export const NameAndTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  font-size: 12px;
`;

export const Type = styled.p`
  font-size: 10px;
`;

export const RightValue = styled.p`
  font-size: 10px;
`;
