import React, { useEffect, useState } from "react";
import * as geolib from "geolib";
import {
  ListContainer,
  ListCard,
  ListCardInfo,
  ListCardTitle,
  ListCardImgContainer,
  ListCardImg,
} from "./styled/listViewStyled";
import { Distance, LocationWait } from "./styled/mapViewStyled";
import { Link } from "react-router-dom";

function BreweriesNearYou({ breweries, position }) {
  const [nearestBreweries, setNearestBreweries] = useState();

  useEffect(() => {
    console.log(breweries);
    if (!position || breweries.length === 0) return;
    const nearest = breweries
      .map((brewery) => {
        const breweryCoord = {
          latitude: brewery.latitude,
          longitude: brewery.longitude,
        };
        return {
          name: brewery.name,
          address: brewery.address,
          logoSrc: brewery.logoSrc,
          id: brewery.id,
          breweryCoord,
          dist: geolib.getDistance(position, breweryCoord),
        };
      })
      .sort((a, b) => a.dist - b.dist);
    const copyOfNearest = nearest.slice(0, 3);

    setNearestBreweries(copyOfNearest);
  }, [position, breweries]);
  console.log(nearestBreweries);

  function getKm(originalDistance) {
    const distance = geolib.convertDistance(originalDistance, "km");
    return Math.round(distance * 10) / 10;
  }

  return (
    <ListContainer>
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
                <p>{brewery.address}</p>
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
