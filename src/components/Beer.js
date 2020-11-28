import React from "react";

function Beer() {
  return <div>
      <img className="beer__image"src="http://www.borgbrugghus.is/media/nr-80gluggagaegir.png" alt=""/>
      <h1 className="beer__name">Beer Name</h1>
      <p className="beer__description">This Christmas, why not take a sneak peek into this Lemon Cake DIPA? After all, it is named after the most curious Icelandic Santa Claus. Window-Peeper.</p>
      <p className="beer__type">DIPA</p>
      <p className="beer__abv">9.0% alc./vol.</p>
  </div>;
}

export default Beer;
