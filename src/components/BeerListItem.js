import React from "react";

function BeerListItem({ data }) {
  return (
    <>
      {/* ATH: value-in verða að hafa if statement á length því annars reynir react að rendera áður en hann fetchar og þá crashar síðan */}
      {data.map((beer) => (
        <div key={beer.name} className="brewlistitem__brewery">
          <img src={beer.img} alt="" />
          <h3>{beer.name}</h3>
          <h4>{beer.type}</h4>
          <h4>{beer.abv}</h4>
        </div>
      ))}
    </>
  );
}

export default BeerListItem;
