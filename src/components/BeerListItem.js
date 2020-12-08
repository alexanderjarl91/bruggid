import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import SVG
import { ReactComponent as Arrow } from "../img/arrow.svg";

// Import components
import FavoriteBeerButton from "./FavoriteBeerButton";

import TriedBeerButton from "./TriedBeerButton";
//import styled components
import { ListCard, DropdownCard, ListCardImg, ListCardImgContainer, ListCardTitle, ListCardInfo, ListContainer, InnerCard, DropdownInfo, DropdownInfoLabel } from "./styled/listViewStyled";



const StyledArrow = styled(Arrow)`
transition: all .2s ease-in-out;
stroke: ${props => props.theme.dark};

&.arrowUp {
    transform: scaleX(-1);
  }
  &.arrowDown {
    transform: scaleY(-1);
  }
`;

const StyledArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
          <InnerCard >
           
            <ListCardImgContainer>
              <ListCardImg src={beerImg} alt="" />
            </ListCardImgContainer>
            <ListCardInfo>
              <ListCardTitle>{beerName}</ListCardTitle>
              <p>{`${beerABV} / ${beerVol} / ${beerType}`} </p>
            </ListCardInfo>

            <StyledIconsContainer>
              <FavoriteBeerButton beer={beer} />
              <TriedBeerButton beer={beer} />
            </StyledIconsContainer>
          </InnerCard>
          
          <StyledArrowContainer>
              <StyledArrow onClick={ (e) => {
              const id = e.target.id || '';
              if (id.includes('icon')) {
                return;
              } 
              setExpanded(i === expanded ? null : i)
              }} className={expanded === i ? "arrowUp" : "arrowDown"} />
            </StyledArrowContainer>   

          <DropdownCard className={expanded === i ? "expanded" : "collapsed"}>
            <DropdownInfo>
              <p>{beerDescription}</p>
              <span><Link key={breweryName} to={`/breweries/${breweryName}`}>{breweryName}</Link></span>
            </DropdownInfo>
          </DropdownCard>

           

        </ListCard>
      )})}
    </ListContainer>
  );
}

export default BeerListItem;
