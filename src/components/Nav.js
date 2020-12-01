import React from "react";
import {Link} from "react-router-dom"

function Nav() {
  return <div>
      <ul>
          <Link to="/beers">Beers</Link>
          <Link to="/breweries">Breweries</Link>
      </ul>
  </div>;
}

export default Nav;
