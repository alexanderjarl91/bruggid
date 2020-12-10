import React, { useState, useEffect } from "react";

//icons
import { ReactComponent as FacebookIcon } from "../img/Facebook.svg";
import { ReactComponent as InstagramIcon } from "../img/Instagram.svg";
import { ReactComponent as LocationIcon } from "../img/location.svg";
import { ReactComponent as WebsiteIcon } from "../img/web.svg";

//import components
import BeerListItem, { filterOutDuplicateBeers } from "./BeerListItem";
import Nav from "./Nav";
import Header from "./Header";

//import styled componentsxs
import {
  BreweryLogo,
  BreweryLogoContainer,
  BreweryLogoImg,
  BreweryInfo,
  BreweryInfoDesc,
  BreweryInfoTitle,
  BreweryInfoLinks,
  BreweryView,
} from "./styled/breweryStyled";
import {
  ListComponent,
  ListInfo,
  ListTitle,
  ListHeaders,
} from "./styled/listViewStyled";

function BreweryDetails({ match }) {
  const [brewery, setBrewery] = useState({ catalog: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          "https://dry-stream-05871.herokuapp.com/breweries"
        );
        response = await response.json();
        console.log(match.params.breweryName, response, "asdfasdf");
        let foundBrewery = response.find(
          (brewery) => brewery.name === match.params.breweryName
        );
        console.log(foundBrewery);
        setBrewery(foundBrewery);
      } catch (err) {
        alert(err);
      }
    }
    fetchData();
  }, [match.params.breweryName]);
  //find item in array that has name = match.params.breweryName

  return (
    <>
      <Header />
      <BreweryView>
        <BreweryLogo>
          <BreweryLogoContainer>
            <BreweryLogoImg src={brewery.logoSrc} alt="" />
          </BreweryLogoContainer>
        </BreweryLogo>
        <BreweryInfo>
          <BreweryInfoTitle>
            <p>Est. {brewery.established}</p>
            <h2>{brewery.name}</h2>
            <p>{brewery.address}</p>
          </BreweryInfoTitle>
          <BreweryInfoLinks>
            <a href={brewery.webUrl}
              rel="noreferrer"
              target="_blank"
                >
              <WebsiteIcon />
            </a>
            <a href={brewery.facebookUrl}
              rel="noreferrer"
              target="_blank"
              >
              <FacebookIcon />
            </a>
            <a href={brewery.instagramUrl}
              rel="noreferrer"
              target="_blank"
              >
              <InstagramIcon />
            </a>
            <a
              href={`https://www.google.com/maps/search/${brewery.name}`}
              rel="noreferrer"
              target="_blank"
            >
              <LocationIcon />
            </a>
          </BreweryInfoLinks>
          <BreweryInfoDesc>
            <p>{brewery.about}</p>
          </BreweryInfoDesc>
        </BreweryInfo>
        <ListComponent>
          <ListInfo>
          <ListTitle brewerypage>Beers</ListTitle>
            <ListHeaders>
              <p></p>
              <p>Love / Tried</p>
            </ListHeaders>
          </ListInfo>
          <BeerListItem
            beers={filterOutDuplicateBeers(brewery.catalog)}
            showBreweryLink={false}
          />
        </ListComponent>
      </BreweryView>
      <Nav />
    </>
  );
}

export default BreweryDetails;
