import React, { useEffect, useState } from "react";
import { ReactComponent as Arrow } from "../img/arrow.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

//import styled components


import {
  ListItem,
  ListImage,
  NameAndTypeContainer,
  RightValue,
  Name,
  Type,
} from "./styled/listStyled";
import { ListCard, DropdownCard, ListCardImg, ListCardImgContainer, ListCardTitle, ListCardInfo, ListContainer, InnerCard } from "./styled/listViewStyled";

const StyledArrow = styled(Arrow)`
transition: all .2s ease-in-out; 
&.arrowUp {
    transform: scaleX(-1);
  }
  &.arrowDown {
    transform: scaleY(-1);
  }
`;

// const StyledBeerItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: baseline;
//   padding-bottom: 1.5rem;
//   cursor: pointer;
// `;

// const StyledBeerInfo = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 1rem;
// `;

// const StyledBeerDropdown = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   justify-content: center;
//   align-content: center;
//   overflow: hidden;

//   &.expanded {
//     max-height: 250px;
//     opacity: 1;
//     transition: max-height 600ms ease, opacity 200ms ease;
//   }
//   &.collapsed {
//     max-height: 0;
//     opacity: 0;
//     transition: max-height 300ms ease, opacity 200ms ease 100ms;
//   }

//   a {
//     color: #f8513d;
//     font-family: rubik;
//     font-weight: bold;
//     font-size: 14px;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

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
      {beers.map(({beerName, beerABV, beerImg, beerType, beerVol, beerDescription, breweryName}, i) => (
        <ListCard column>
          <InnerCard onClick={ () => setExpanded(i === expanded ? null : i)  }>
            <ListCardImgContainer>
              <ListCardImg src={beerImg} alt="" />
            </ListCardImgContainer>
            <ListCardInfo>
              <ListCardTitle>{beerName}</ListCardTitle>
              <p>{`${beerABV} / ${beerVol} / ${beerType}`}</p>
            </ListCardInfo>
            <StyledArrow className={expanded === i ? "arrowUp" : "arrowDown"} />
          </InnerCard>
          <DropdownCard className={expanded === i ? "expanded" : "collapsed"}>
            <p>{beerDescription}</p>
            <Link key={breweryName} to ={`/breweries/${breweryName}`}>{breweryName}</Link>
          </DropdownCard>
        </ListCard>
      ))}
    </ListContainer>

    // <>
    //   {beers.map(({beerName, beerABV, beerImg, beerType, beerVol, beerDescription, breweryName}, i) => (
    //     <ListItem key={`${beerName}_${beerABV}`} className="brewlistitem__brewery">
    //       <StyledBeerItem onClick={ () => setExpanded(i === expanded ? null : i)  }>
    //         <StyledBeerInfo>
    //           <ListImage src={beerImg} alt="" />
    //           <NameAndTypeContainer>
    //             <Name>{beerName}</Name>
    //             <Type>{`${beerABV} / ${beerVol} / ${beerType}`}</Type>
    //           </NameAndTypeContainer>
    //         </StyledBeerInfo>
    //         <StyledArrow className={expanded === i ? "arrowUp" : "arrowDown"} />
    //       </StyledBeerItem>
          
    //       {/* Description dropdown and link */}
    //       <StyledBeerDropdown className={expanded === i ? 'expanded' : 'collapsed'}>
    //       <Type>{beerDescription}</Type>
    //         {showBreweryLink && 
    //           <span>
    //             <a href={`/breweries/${breweryName}`}><Type>{breweryName}</Type></a>
    //           </span>
    //         }
    //       </StyledBeerDropdown>
    //     </ListItem>
    //   ))}
    // </>
  );
}

export default BeerListItem;
