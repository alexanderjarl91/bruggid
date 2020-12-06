import React from "react";
import { Link } from "react-router-dom";

//import styled components
import { HeaderLogo } from "./styled/navItemsStyled";

function Header() {
  return (
    <HeaderLogo>
        <Link to="/">
            {/* <img src="../img/LOGO.svg"/> */}
            <img src="https://svgshare.com/i/S2b.svg" />
        </Link>
    </HeaderLogo>
  );
}

export default Header;