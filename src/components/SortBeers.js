import React, { useState } from "react";
//import styled components
import {
  SortButtonText,
  SortContainer,
  SortButton,
  SortButtonsContainer,
  MainSortButton,
  SortButtonStuff,
} from "./styled/index";

function Sort({ sortAZ, sortZA, sortType, sortABV }) {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!toggled);
    console.log(toggled);
  }

  return (
    <SortContainer>
      <MainSortButton onClick={handleClick}>
        <SortButtonStuff>
          <SortButtonText>Sort</SortButtonText>
          {toggled && (
            <img
              width="13px"
              height="13px"
              src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"
              alt=""
            ></img>
          )}
          {!toggled && (
            <img
              width="20px"
              src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-128.png"
              alt=""
            />
          )}
        </SortButtonStuff>
      </MainSortButton>
      {/* if toggled = true, return these items: */}
      {toggled && (
        <SortButtonsContainer background-color="red">
          <SortButton onClick={sortAZ}>A-Z</SortButton>
          <SortButton onClick={sortZA}>Z-A</SortButton>
          <SortButton onClick={sortType}>Type</SortButton>
          <SortButton onClick={sortABV}>ABV</SortButton>
        </SortButtonsContainer>
      )}
    </SortContainer>
  );
}

export default Sort;
