import React, { useState } from "react";
//import styled components
import { SortButton, SortContainer } from "./styled/index";

function Sort({ sortAZ, sortZA, sortBeerCount, sortEstablished }) {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!toggled);
    console.log(toggled);
  }

  return (
    <div>
      <button onClick={handleClick}>sort and filter</button>
      {toggled && (
        <SortContainer background-color="red">
          <SortButton onClick={sortAZ}>A-Z</SortButton>
          <SortButton onClick={sortZA}>Z-A</SortButton>
          <SortButton onClick={sortEstablished}>Est.</SortButton>
          <SortButton onClick={sortBeerCount}>Beers</SortButton>
        </SortContainer>
      )}
    </div>
  );
}

export default Sort;
