import React from "react";

function BreweryListItem({ data }) {
  return (
    <>
    {/* ATH: value-in verða að hafa if statement á length því annars reynir react að rendera áður en hann fetchar og þá crashar síðan */}
      {data.map((brewery) => (
        <div key={brewery.id} className="brewlistitem__brewery">
          <img src={data.length ? data[1].logoSrc : "loading data.."} alt="" />
          <h3>{data.length ? data[1].name : "loading data.."}</h3>
          <h4>{data.length ? data[1].address : "loading data.."}</h4>
        </div>
      ))}
    </>
  );
}

export default BreweryListItem;
