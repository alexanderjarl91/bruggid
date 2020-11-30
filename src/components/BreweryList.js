import React from "react";
import BreweryListItem from "./BreweryListItem";
import Nav from "./Nav";

function BreweryList() {
  return (
    <div>
      <button>button</button>
      <input type="text" />
      <ul>
        <BreweryListItem /> {/* this should show modal on click */}
      </ul>

      <Nav />
    </div>
  );
}

export default BreweryList;
