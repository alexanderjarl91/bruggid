import React from "react";
import { Link } from "react-router-dom";

//import styled components
import { NavContainer, ButtonContainer } from "./styled/navStyled";
import { Button } from "./styled/shared/buttons";

function Nav() {
  return (
    <div>
      <NavContainer>
        <ButtonContainer>
          <Link to="/beers">
            <Button>BEERS</Button>
          </Link>
        </ButtonContainer>
        <ButtonContainer>
          <Link to="/breweries">
            <Button>BREWERIES</Button>
          </Link>
        </ButtonContainer>
      </NavContainer>
    </div>
  );
}

export default Nav;
