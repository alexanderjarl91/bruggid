import styled from "styled-components";

const export headerLogo = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

const export headerLogoImg = styled.img`
height: 60%;
`

const export navBar = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 88px;
  width: 100vw;
  z-index: 100;

  background: #f8513d;
  filter: drop-shadow(0px -2px 6px rgba(42, 42, 42, 0.4));
  border-radius: 20px 20px 0 0;

  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const export navBtnContainer = styled.div`
  width: 100%;
  margin: 0 12px 12px 12px;
`
// Nav bar btns — if they have a prop of selected, it appears pressed
const export navBtn = styled.button`
    appearance: none;
    width: 100%;
    height: 52px;

    font-weight: bold;
    text-transform: uppercase;
    font-size: 1rem;
    color: #2a2a2a;

    background-color: #f9f9f9;
    border: 2px solid #2a2a2a;
    border-radius: 20px;

    box-shadow: 0 12px 0 #2a2a2a;

    transition: margin 200ms ease-in-out, box-shadow 200ms ease-in-out;

    &:hover, &:active {
        margin-top: 24px;
  box-shadow: 0 0 0 #2a2a2a;
    }

    ${props => {
        if (props.selected) {
            return "margin-top: 16px; box-shadow: 0 4px 0 #2a2a2a;"
        }
    }}
`