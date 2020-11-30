import React from "react";
import { Link } from "react-router-dom";
import BreweryListItem from "./BreweryListItem";
import Nav from "./Nav";

function BreweryList() {
  return (
    <div>
      <Link to="/"><button>back</button></Link>
      <input type="text" />
      <ul>
        <BreweryListItem /> {/* this should show modal on click */}
      </ul>

      <Nav />
    </div>
  );
}

export default BreweryList;
