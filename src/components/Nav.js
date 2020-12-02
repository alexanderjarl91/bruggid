import React from "react";
import { Link } from "react-router-dom";

//import styled components
import { NavButton, NavContainer } from "./styled/navStyled";

function Nav() {
  return (
    <div>
      <NavContainer>
        <Link to="/beers">
          <NavButton>Beers</NavButton>
        </Link>
        <Link to="/breweries">
          <NavButton>Breweries</NavButton>
        </Link>
      </NavContainer>
    </div>
  );
}

export default Nav;
