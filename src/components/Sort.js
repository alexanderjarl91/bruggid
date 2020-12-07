import React, { useState } from "react";
import { ReactComponent as Arrow } from "../img/arrow.svg";
import { SortBar, SortBarSelect, ArrowImg, SortBarDropdown, BtnSort } from "./styled/searchComponentStyled";
//import styled components
// import { SortButtonText, SortContainer, SortButton, SortButtonsContainer, MainSortButton, SortButtonStuff } from "./styled/index";

function Sort({ sortAZ, sortZA, sortBeerCount, sortEstablished }) {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!toggled);
    console.log(toggled);
  }

  return (
    <SortBar>
      <SortBarSelect onClick={handleClick}>
        <p>Sort</p>
        {!toggled && <p>V</p>}
        {toggled && <p>∆</p>}
        {/* <ArrowImg src="./img/arrow.svg"/> Næ ekki að láta þessa bölvuðu ör birtast*/}
      </SortBarSelect>
      {toggled && (
        <SortBarDropdown>
        <BtnSort onClick={sortAZ}>A-Z</BtnSort>
        <BtnSort onClick={sortZA}>Z-A</BtnSort>
        <BtnSort onClick={sortEstablished}>Est.</BtnSort>
        <BtnSort onClick={sortBeerCount}>Beers</BtnSort>
      </SortBarDropdown>
      )}
    </SortBar>
  );
}

export default Sort;
