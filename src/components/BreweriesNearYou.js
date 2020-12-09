// Import React hooks
import React, { useEffect, useState } from "react";

// Import dependencies
import * as geolib from "geolib";
import { Link } from "react-router-dom";

// Import components
import {
  ListContainer,
  ListCard,
  ListCardInfo,
  ListCardTitle,
  ListCardImgContainer,
  ListCardImg,
} from "./styled/listViewStyled";
import { Distance, LocationWait } from "./styled/mapViewStyled";

// Passing in breweries and position props from Map component
function BreweriesNearYou({ breweries, position }) {
  const [nearestBreweries, setNearestBreweries] = useState();

  // Effect hook for getting nearest breweries and setting them to state
  useEffect(() => {
    // If no position or breweries array emtpy do nothing
    if (!position || breweries.length === 0) return;
    // Mapping breweries array
    const nearest = breweries
      .map((brewery) => {
        const breweryCoord = {
          latitude: brewery.latitude,
          longitude: brewery.longitude,
        };
        // Returning brewery name, type, logo, id, coordinates and distance in meters
        return {
          name: brewery.name,
          type: brewery.type,
          logoSrc: brewery.logoSrc,
          id: brewery.id,
          breweryCoord,
          // Using giolib function getDistance to calculate breweries distance from user.
          // The function uses a complex math formula to calculate the distance from lat, lng
          // coordinates and returns it in meters
          dist: geolib.getDistance(position, breweryCoord),
        };
      })
      // Sorting the array to get nearest first
      .sort((a, b) => a.dist - b.dist);
    // Slicing the nearest four breweries from the array
    const copyOfNearest = nearest.slice(0, 5);
    
    // Setting the NearestBreweries state to the sliced array
    setNearestBreweries(copyOfNearest);
    // Pass an array to the hook. React will apply the effect when these values change.
  }, [position, breweries]);

  console.log(nearestBreweries);

  // Function to convert distance into km using geolib convertDistance 
  // function and Math.round to return only one decimal
  function getKm(originalDistance) {
    const distance = geolib.convertDistance(originalDistance, "km");
    return Math.round(distance * 10) / 10; 
  }

  return (
    <ListContainer>
        {/* If there is a position and nearestBreweries has objects map the
        array and return each brewery's logo, type, address and distance from 
        user in km, else return a message. */}
      {position && nearestBreweries && nearestBreweries.length > 0 ? (
        nearestBreweries.map((brewery) => (
          <Link key={brewery.id} to={`/breweries/${brewery.name}`}>
            <ListCard>
              <ListCardImgContainer>
                <ListCardImg
                  src={brewery.logoSrc}
                  alt="`{brewery.name} logo`"
                />
              </ListCardImgContainer>
              <ListCardInfo>
                <ListCardTitle>{brewery.name}</ListCardTitle>
                <p>{brewery.type}</p>
              </ListCardInfo>
              <Distance>{getKm(brewery.dist)} km</Distance>
            </ListCard>
          </Link>
        ))
      ) : (
        <LocationWait>
        <p>No breweries near you can only mean two things.</p>
        <p>Either you've travelled back in time before March 1st 1989 or we're still waiting for your location.</p>
        {/* <p>Either you've travelled back in time to before March 1st 1989</p>
        <p>or we're still waiting for your location.</p> */}
        </LocationWait>
      )}
    </ListContainer>
  );
}

export default BreweriesNearYou;
