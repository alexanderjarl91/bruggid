import React from "react";
import Beer from "./Beer"

function Brewery() {
  return (
    <div>
      <img className="brewery__logo"src="http://www.borgbrugghus.is/Content/Customer/img/logo.svg" alt="borg"/>
      <h1 className="brewery__name">Borg Brugghús</h1>
      <p className="brewery__description">Borg Brugghús is a progressive craft brewery founded in 2010 whose principal aim is to incorporate Icelandic cultural traits and local ingredients to its wide variety of beers and pair with food. Borg Brugghús has already received numerous awards at some of the world‘s most noted and influential competitions.</p>
      <div className="brewery__socialIcons">
        <a href="www.instagram.com/borgbrugghus">
        <img src="https://cdn2.iconfinder.com/data/icons/social-media-icons-23/800/instagram-512.png" alt=""/>
        </a>
      </div>
      <img className="brewery__map"src="https://i.ibb.co/34ByyN6/map-placeholder.png" alt=""/>
      <p className="brewery__address">Grjóthálsi 7-11, 110 Reykjavík</p>


    </div>
  );
}

export default Brewery;
