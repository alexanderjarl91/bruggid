import React, { useState } from "react";
import { Link } from "react-router-dom";

//import styled components
import { ListItem } from "./styled/beerListStyled";

function BreweryListItem({ data }) {
  //Toggle data in or out with function
  //   const [toggleInfo, setToggleInfo] = useState(new Array(data.length))

  //   function handleClick(i) {
  //     // alert("wow. component was clicked. amazing.");
  //     const tempArray = [...toggleInfo];
  //     tempArray[i] = !tempArray[i]
  //     setToggleInfo(tempArray)
  //   }
  //

  return (
    <>
      {data.map((brewery, i) => (
        <Link to="/breweries/id">
          <div key={brewery.id} className="brewlistitem__brewery">
            <img src={brewery.logoSrc} alt="" />
            <h3>{brewery.name}</h3>
            {/* {toggleInfo[i] && <h4>{brewery.address}</h4> } */}
            <h4>{brewery.type}</h4>
            <h4 className="brewerylistitem__beerCount">
              Beer Count: {brewery.catalog.length}
            </h4>
          </div>
        </Link>
      ))}
    </>
  );
}

export default BreweryListItem;
