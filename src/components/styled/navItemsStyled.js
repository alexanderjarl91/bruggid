import styled from "styled-components";

// Logo in top corner
export const HeaderLogo = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  @media (min-width: 1024px) {
    height: 100px;
    width: 100px;
    }
`

// Navbar at bottom of view
export const NavBar = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 88px;
  width: 100vw;
  z-index: 999;

  background: ${props => props.theme.accent};
  filter: drop-shadow(0px -2px 6px rgba(42, 42, 42, 0.4));
  border-radius: 20px 20px 0 0;

  padding: 16px 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    padding: 18px;
  }

  @media (max-height: 700px) {
    height: 64px;
  }
`

export const NavBtnContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 12px 12px 24px 12px;

  @media (min-width: 1024px) {
    width: 25vw;
  }

  @media (max-height: 700px) {
    margin-bottom: 18px;
  }
`
// Nav bar btns — if they have a prop of selected, it appears pressed
export const NavBtn = styled.button`
    appearance: none;
    width: 100%;
    height: 100%;

    font-weight: bold;
    text-transform: uppercase;
    font-size: 1rem;
    color: ${props => props.theme.dark};

    background-color: ${props => props.theme.light};
    border: 2px solid ${props => props.theme.dark};
    border-radius: 20px;

    box-shadow: 0 12px 0 ${props => props.theme.dark};

    transition: margin 200ms ease-in-out, box-shadow 200ms ease-in-out;

    &:hover, &:active {
        margin-top: 12px;
        box-shadow: 0 0 0 ${props => props.theme.dark};
    }

    ${props => {
        if (props.selected) {
            return `
            margin-top: 8px;
            box-shadow: 0 4px 0 #2a2a2a;
            `
        }
    }}

    @media (max-height: 700px) {
      box-shadow: 0 9px 0 ${props => props.theme.dark};

      &:hover, &:active {
        margin-top: 9px;
        box-shadow: 0 0 0 ${props => props.theme.dark};
    }

    ${props => {
        if (props.selected) {
            return `
            margin-top: 5px;
            box-shadow: 0 4px 0 #2a2a2a;
            `
        }
    }}
    }
`