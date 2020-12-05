import styled from "styled-components";

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid lightgray;
  border-radius: 15px 10px 0px 0px;
  height: 60px;
  text-align: left;
`;
export const ListHeaderText = styled.div`
  font-family: "Rubik", sans-serif;
  font-size: 24px;
  font-weight: bold;
  padding: 1px;
  margin: 1rem 2rem;
`;

export const ListContainer = styled.div`
  background-color: purple;
  height: 500px;
  overflow: scroll;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem 2rem;
  border-bottom: 1px solid lightgray;
  height: auto;
  text-align: left;
  align-items: space-between;
`;

export const ListImage = styled.img`
  width: 3rem;
  /* height: 50%; */
`;

export const NameAndTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const Name = styled.h3`
  font-family: "Rubik";
  text-transform: uppercase;
  font-size: 18px;
`;

export const Type = styled.p`
  font-size: 16px;
`;

export const RightValue = styled.p`
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  position: fixed;
  right: 0;
  margin-right: 2rem;
`;
