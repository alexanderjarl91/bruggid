import React from "react";
//import styled components
import { SortButton } from "./styled/index";

function Sort({ sortAZ, sortZA, sortBeerCount, sortEstablished }) {
  return (
    <div>
      <h3>Sort and filter</h3>
      <SortButton onClick={sortAZ}>A-Z</SortButton>
      <SortButton onClick={sortZA}>Z-A</SortButton>
      <SortButton onClick={sortEstablished}>Est.</SortButton>
      <SortButton onClick={sortBeerCount}>Beers</SortButton>
    </div>
  );
}

export default Sort;
