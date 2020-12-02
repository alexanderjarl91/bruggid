import React from "react";
import { Link } from "react-router-dom";

//import styled components
import { NavButton, NavContainer } from "./styled/navStyled";

function Nav() {
  return (
    <div>
      <NavContainer>
        <Link to="/beers">
          <NavButton>BEERS</NavButton>
        </Link>
        <Link to="/breweries">
          <NavButton>BREWERIES</NavButton>
        </Link>
      </NavContainer>
    </div>
  );
}

export default Nav;
