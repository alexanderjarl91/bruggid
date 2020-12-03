import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: ${props => props.theme.accent};
  height: 12.5vh;
  width: 100%;
  border-radius: 20px 20px 0 0;

  display: flex;
  align-items: center;
  padding: 0 12px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin: 0 12px;
`;