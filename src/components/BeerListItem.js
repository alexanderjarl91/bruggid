import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import SVG
import { ReactComponent as Arrow } from "../img/arrow.svg";

// Import components
import FavoriteBeerButton from "./FavoriteBeerButton";

import TriedBeerButton from "./TriedBeerButton";
//import styled components
import { ListCardTitle, ListCardInfo, ListContainer} from "./styled/listViewStyled";
import { BeerCard, BeerCardDropdown, BeerCardImg, BeerCardImgContainer, BeerCardInfo, BeerCardSeeMore } from "./styled/beerCardStyled";



const StyledArrow = styled(Arrow)`
cursor: pointer;
transition: all .2s ease-in-out;
stroke: ${props => props.theme.mid};

&.arrowUp {
    transform: scaleX(-1);
  }
  &.arrowDown {
    transform: scaleY(-1);
  }
`;

const StyledIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
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
          <BeerCard className={expanded === i ? "expanded" : "collapsed"} >
            <BeerCardImgContainer>
              <BeerCardImg src={beerImg} alt="" />
            </BeerCardImgContainer>
            <BeerCardInfo>
              <ListCardInfo>
                <ListCardTitle>{beerName}</ListCardTitle>
                <p>{`${beerABV} / ${beerVol} / ${beerType}`}</p>
              </ListCardInfo>
              <StyledIconsContainer>
                  <FavoriteBeerButton beer={beer} />
                  <TriedBeerButton beer={beer} />
              </StyledIconsContainer>
            </BeerCardInfo>
            {expanded === i && <BeerCardDropdown>
              <Link key={breweryName} to={`/breweries/${breweryName}`}><span>{breweryName}</span></Link>
              <p>{beerDescription}</p>
            </BeerCardDropdown>}
            <BeerCardSeeMore onClick={ (e) => {
              const id = e.target.id || '';
              if (id.includes('icon')) {
                return;
              }
              setExpanded(i === expanded ? null : i)
            }}><StyledArrow className={expanded === i ? "arrowUp" : "arrowDown"} /></BeerCardSeeMore>
          </BeerCard>
      )})}
    </ListContainer>
  );
}

export default BeerListItem;