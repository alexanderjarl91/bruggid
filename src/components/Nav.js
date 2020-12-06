import React from "react";
import { Link } from "react-router-dom";

//import styled components
import { NavBar, NavBtnContainer, NavBtn } from "./styled/navItemsStyled";

function Nav() {
  return (
    <NavBar>
      <NavBtnContainer>
        <Link to="/beers">
          <NavBtn>Beers</NavBtn>
        </Link>
      </NavBtnContainer>
      <NavBtnContainer>
        <Link to="/breweries">
          <NavBtn>Breweries</NavBtn>
        </Link>
      </NavBtnContainer>
    </NavBar>
  );
}

export default Nav;
