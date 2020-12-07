import React, { useState } from "react";
//import styled components
import { SortBar, SortBarSelect, ArrowImg, SortBarDropdown, BtnSort } from "./styled/searchComponentStyled";

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
        {!toggled && <p>V</p>}
        {toggled && <p>∆</p>}
        {/* <ArrowImg src="./img/arrow.svg"/> Næ ekki að láta þessa bölvuðu ör birtast*/}
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
 