import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


//import components
import SpecificBeers from './SpecificBeers'
//import styled components
import { BackBtn } from "./styled/index";
import {InfoContainer, LinkContainer, Header, HeaderImage, HeaderTitle, Description, Founded} from "./styled/breweryDetailsStyled"


function BreweryDetails({ match }) {
  const [brewery, setBrewery] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://brugg-api.herokuapp.com/breweries");
        response = await response.json();
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
  }, []);
  //find item in array that has name = match.params.breweryName

  return (
    
    <div>
      <Link to="/breweries">
          <BackBtn />
        </Link>
        <Header>
            <HeaderImage src={brewery.logoSrc}/>
            <HeaderTitle>{brewery.name}</HeaderTitle>
        </Header>
      <InfoContainer>
      <Founded>Founded in {brewery.established}</Founded>
      <Description>
      Borg Brugghús is a progressive craft brewery founded in 2010 whose
        principal aim is to incorporate Icelandic cultural traits and local
        ingredients to its wide variety of beers and pair with food. Borg
        Brugghús has already received numerous awards at some of the world‘s
        most noted and influential competitions.
      </Description>
    
    <LinkContainer>
            <a href={brewery.webUrl}><img src="https://svgshare.com/i/S0T.svg" alt=""/></a>
            <a href={brewery.facebookUrl}><img src="https://svgshare.com/i/RzS.svg" alt=""/></a>
            <a href={brewery.instagramUrl}><img src="https://svgshare.com/i/S18.svg" alt=""/></a>
            <a href={`https://www.google.com/maps/@${brewery.latitude},${brewery.longitude},15z`} rel="noreferrer" target="_blank"><img src="https://svgshare.com/i/S05.svg" alt=""/></a>
    </LinkContainer>
        
      
      </InfoContainer>
    <SpecificBeers beers={brewery} />

    </div>
  );
}

export default BreweryDetails;
