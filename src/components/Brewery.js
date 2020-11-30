import React from "react";
import Beer from "./Beer"

function Brewery( {data}) {
  console.log(data)
  return (
    // hér möppum við í gegnum displayum html element fyrir hvern hlut í data fylkinu (muna að gera key={xxx.name} í parent div)
    <div>
      <img className="brewery__logo"src="http://www.borgbrugghus.is/Content/Customer/img/logo.svg" alt="borg"/>
  <h1 className="brewery__name">Borg Brugghús</h1>
      <p className="brewery__description">Borg Brugghús is a progressive craft brewery founded in 2010 whose principal aim is to incorporate Icelandic cultural traits and local ingredients to its wide variety of beers and pair with food. Borg Brugghús has already received numerous awards at some of the world‘s most noted and influential competitions.</p>
      <p className="brewery__founding__year">2010</p>
      <p className="brewery__email">borgbrugghus@borgbrugghus.is</p>
      <div className="brewery__socialIcons">
        <a href="https://www.instagram.com/borgbrugghus">
        <img src="https://image.shutterstock.com/image-photo/kiev-ukraine-october-15-2019-260nw-1539544949.jpg" alt=""/>
        </a>
      </div>
      <img className="brewery__map"src="https://i.ibb.co/34ByyN6/map-placeholder.png" alt=""/>
      <p className="brewery__address">Grjóthálsi 7-11, 110 Reykjavík</p>

      <Beer />
    </div>
  );
}

export default Brewery;
