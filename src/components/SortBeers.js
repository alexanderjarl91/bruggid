import React, { useState } from "react";
import styled from "styled-components";

// Import SVG
import { ReactComponent as Arrow } from "../img/arrow.svg";

// Import styled
import { SortBar, SortBarSelect, SortBarDropdown, BtnSort } from "./styled/searchComponentStyled";

const StyledArrow = styled(Arrow)`
transition: all .2s ease-in-out; 
stroke: ${props => props.theme.light};

&.arrowUp {
    transform: scaleX(-1);
  }
  &.arrowDown {
    transform: scaleY(-1);
  }
`;

function Sort({ sortAZ, sortZA, sortType, sortABV }) {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!toggled);
    console.log(toggled);
  }

  return (
    <SortBar>
      <SortBarSelect onClick={handleClick}>
        <p>Sort</p>
        {!toggled && <StyledArrow className="arrowDown" />}
        {toggled && <StyledArrow className="arrowUp" />}
      </SortBarSelect>
      {toggled && (
        <SortBarDropdown>
          <BtnSort onClick={sortAZ}>A-Z</BtnSort>
          <BtnSort onClick={sortZA}>Z-A</BtnSort>
          <BtnSort onClick={sortType}>Type</BtnSort>
          <BtnSort onClick={sortABV}>ABV</BtnSort>
        </SortBarDropdown>
      )}
    </SortBar>
  );
}

export default Sort;
 