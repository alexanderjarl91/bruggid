import React from "react";

function BreweryListItem({ data }) {
  return (
    <>
      {/* ATH: value-in verða að hafa if statement á length því annars reynir react að rendera áður en hann fetchar og þá crashar síðan */}
      {data.map((brewery) => (
        <div key={brewery.id} className="brewlistitem__brewery">
          <img src={brewery.logoSrc} alt="" />
          <h3>{brewery.name}</h3>
          <h4>{brewery.address}</h4>
          <h4>{brewery.type}</h4>
          <h4 className="brewerylistitem__beerCount">
            {brewery.catalog.length}
          </h4>
          <a href={brewery.instagramUrl}>instagram</a>

          {/* DETAILED VIEW */}
          <a href={`https://google.com/maps/@${brewery.latitude},${brewery.longitude},15z`}>
            <img src="https://img.icons8.com/plasticine/2x/google-maps.png" width="30px" alt=""/>
            </a>
          <a href={brewery.facebookUrl}>facebook</a>
          <a href={brewery.instagramUrl}>instagram</a>
          
        </div>
      ))}
    </>
  );
}

export default BreweryListItem;
