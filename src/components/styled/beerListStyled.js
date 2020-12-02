import styled from "styled-components";

export const ListItem = styled.div`
  display: flex;
  background: pink;
  margin-right: 3rem;
  &:hover {
    background-color: gray;
  }
`;

export const BeerImage = styled.img`
  width: 50px;
`;

export const NameAndTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
