import React from "react";

//import styled components
import {
  ListItem,
  ListImage,
  NameAndTypeContainer,
  RightValue,
  Name,
  Type,
} from "./styled/listStyled";

function BeerListItem({ data }) {
  return (
    <>
      {/* ATH: value-in verða að hafa if statement á length því annars reynir react að rendera áður en hann fetchar og þá crashar síðan */}
      {data.map((beer) => (
        <ListItem key={beer.name} className="brewlistitem__brewery">
          <ListImage src={beer.img} alt="" />
          <NameAndTypeContainer>
            <Name>{beer.name}</Name>
            <Type>{beer.type}</Type>
          </NameAndTypeContainer>
          <RightValue>{beer.abv}</RightValue>
        </ListItem>
      ))}
    </>
  );
}

export default BeerListItem;
