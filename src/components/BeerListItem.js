import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import SVG
import { ReactComponent as Arrow } from "../img/arrow.svg";

// Import components
import FavoriteBeerButton from "./FavoriteBeerButton";

//import styled components
import { ListCard, DropdownCard, ListCardImg, ListCardImgContainer, ListCardTitle, ListCardInfo, ListContainer, InnerCard, DropdownInfo, DropdownInfoLabel } from "./styled/listViewStyled";



const StyledArrow = styled(Arrow)`
transition: all .2s ease-in-out;
margin-right: 0.5rem;
stroke: ${props => props.theme.dark};

&.arrowUp {
    transform: scaleX(-1);
  }
  &.arrowDown {
    transform: scaleY(-1);
  }
`;




export const filterOutDuplicateBeers = beers => beers.filter((beer, index, self) =>
          index === self.findIndex((t) => (
            t.beerName === beer.beerName && t.beerABV === beer.beerABV
          ))
        );

// creating a beer object, extra parameter of not showing link
function BeerListItem({ beers = [], showBreweryLink = true }) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setExpanded(null);
  }, [beers]);

  return (
    <ListContainer>
      {beers.map((beer, i) => {
        const {beerName, beerABV, beerImg, beerType, beerVol, beerDescription, breweryName} = beer;
        return (
        <ListCard key={`${beerName}_${beerABV}`} column>
          <InnerCard onClick={ (e) => {
              const id = e.target.id || '';
              if (id.includes('favorite')) {
                return;
              } 
              setExpanded(i === expanded ? null : i)
            }}>
           <StyledArrow className={expanded === i ? "arrowUp" : "arrowDown"} />
  
            <ListCardImgContainer>
              <ListCardImg src={beerImg} alt="" />
            </ListCardImgContainer>
            <ListCardInfo>
              <ListCardTitle>{beerName}</ListCardTitle>
              <p>{`${beerABV} / ${beerVol} / ${beerType}`} </p>
            </ListCardInfo>
            <FavoriteBeerButton beer={beer} />
          </InnerCard>
          <DropdownCard className={expanded === i ? "expanded" : "collapsed"}>
            <DropdownInfo>
              <DropdownInfoLabel>Desc.</DropdownInfoLabel>
              <p>{beerDescription}</p>
              <DropdownInfoLabel>Brewery</DropdownInfoLabel>
              <span><Link key={breweryName} to={`/breweries/${breweryName}`}>{breweryName}</Link></span>
            </DropdownInfo>
          </DropdownCard>
        </ListCard>
      )})}
    </ListContainer>
  );
}

export default BeerListItem;
