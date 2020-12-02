import React from "react";

//import styled components
import {
  ListItem,
  BeerImage,
  NameAndTypeContainer,
} from "./styled/beerListStyled";

function BeerListItem({ data }) {
  return (
    <>
      {/* ATH: value-in verða að hafa if statement á length því annars reynir react að rendera áður en hann fetchar og þá crashar síðan */}
      {data.map((beer) => (
        <ListItem key={beer.name} className="brewlistitem__brewery">
          <BeerImage src={beer.img} alt="" />
          <NameAndTypeContainer>
            <h3>{beer.name}</h3>
            <p>{beer.type}</p>
          </NameAndTypeContainer>
          <h4>{beer.abv}</h4>
        </ListItem>
      ))}
    </>
  );
}

export default BeerListItem;
