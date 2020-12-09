import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//import logo
import { ReactComponent as Logo } from "../img/LOGO.svg";

//import styled components
import { HeaderLogo } from "./styled/navItemsStyled";

const StyledLogo = styled(Logo)`
  height: 60%;
`

function Header() {
  return (
    <Link to="/">
      <HeaderLogo>
        <StyledLogo/>
      </HeaderLogo>
    </Link>
  );
}

export default Header;