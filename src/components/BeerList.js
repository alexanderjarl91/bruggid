import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function BeerList() {
  return (
    <div>
      <Link to="/"><button>back</button></Link>
      <input type="text" />
      <ul>
        <li>beer 1</li>
        <li>beer 2</li>
        <li>beer 3</li>
      </ul>

      <Nav />
    </div>
  );
}

export default BeerList;
