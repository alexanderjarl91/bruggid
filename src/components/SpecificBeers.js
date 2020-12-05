import React from "react";

import {
  ListHeader,
  ListHeaderText,
  ListItem,
  Name,
  Type,
  RightValue,
  ListImage,
  NameAndTypeContainer,
} from "./styled/listStyled";

function SpecificBeers({ beers }) {
  console.log(beers.catalog);

  return (
    <>
      <ListHeader>
        <ListHeaderText>Our Beers</ListHeaderText>
        <ListHeaderText>ABV</ListHeaderText>
      </ListHeader>

      {beers && beers.catalog
        ? beers.catalog.map((beer) => (
            <ListItem key={beer.beerName} className="brewlistitem__brewery">
              <ListImage src={beer.beerImg} alt="" />
              <NameAndTypeContainer>
                <Name>{beer.beerName}</Name>
                <Type>{beer.beerType}</Type>
              </NameAndTypeContainer>
              <RightValue>{beer.beerABV}</RightValue>
            </ListItem>
          ))
        : "finding beers"}
    </>
  );
}

export default SpecificBeers;
