import styled from "styled-components";
import { accent } from "./theme/orange";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const HeaderImage = styled.img`
  width: 140px;
  margin-bottom: 1rem;
`;

export const HeaderTitle = styled.h4`
  font-family: "Rubik", sans-serif;
  font-weight: bold;
  color: white;
  font-size: 24px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: ${accent};
  border-radius: 18px 18px 0px 0px;
  justify-content: center;
  text-align: left;
`;

export const Founded = styled.h4`
  font-family: "Rubik", sans-serif;
  color: black;
  font-weight: bold;
  font-size: 18px;
  max-width: 50%;

  margin: 1rem auto;
`;

export const Description = styled.h4`
  font-family: "Rubik", sans-serif;
  color: black;
  font-size: 14px;
  max-width: 50%;

  margin: 1rem auto;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  & > a {
    margin: 1rem;
  }
`;
