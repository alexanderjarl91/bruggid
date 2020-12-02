import styled from "styled-components";

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid lightgray;
  border-radius: 15px 10px 0px 0px;
  height: 50px;
  text-align: left;
`;
export const ListHeaderText = styled.div`
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  font-weight: bold;
  padding: 1px;
  margin: 1rem 2rem;
`;

export const ListItem = styled.div`
  display: flex;
  background: white;
  width: 100vw;
  border-bottom: 1px solid lightgray;
  height: 75px;
  text-align: left;
  align-items: center;
  &:hover {
    background-color: gray;
  }
`;

export const ListImage = styled.img`
  width: 30px;
  /* height: 50%; */
  margin: 1rem;
`;

export const NameAndTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  font-family: "Rubik";
  font-size: 12px;
`;

export const Type = styled.p`
  font-size: 10px;
`;

export const RightValue = styled.p`
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  position: fixed;
  right: 0;
  margin-right: 2rem;
`;
