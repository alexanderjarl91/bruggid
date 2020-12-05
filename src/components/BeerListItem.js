import React, { useEffect, useState } from "react";
import { ReactComponent as Arrow } from "../img/arrow.svg";
import styled from "styled-components";

//import styled components
import {
  ListItem,
  ListImage,
  NameAndTypeContainer,
  RightValue,
  Name,
  Type,
} from "./styled/listStyled";

const StyledArrow = styled(Arrow)`
  transition: all 0.2s ease-in-out;

  &.arrowUp {
    transform: scaleX(-1);
  }
  &.arrowDown {
    transform: scaleY(-1);
  }
`;

const StyledBeerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 1.5rem;
  cursor: pointer;
`;

const StyledBeerInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const StyledBeerDropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-content: center;
  overflow: hidden;

  &.expanded {
    max-height: 250px;
    opacity: 1;
    transition: max-height 600ms ease, opacity 200ms ease;
  }
  &.collapsed {
    max-height: 0;
    opacity: 0;
    transition: max-height 300ms ease, opacity 200ms ease 100ms;
  }

  a {
    color: #f8513d;
    font-family: rubik;
    font-weight: bold;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function BeerListItem({ data }) {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    setExpanded(null);
  }, [data]);
  return (
    <>
      {/* ATH: value-in verða að hafa if statement á length því annars reynir react að rendera áður en hann fetchar og þá crashar síðan */}
      {data.map((beer, i) => (
        <ListItem key={beer.name} className="brewlistitem__brewery">
          <StyledBeerItem
            onClick={() => setExpanded(i === expanded ? null : i)}
          >
            <StyledBeerInfo>
              <ListImage src={beer.img} alt="" />
              <NameAndTypeContainer>
                <Name>{beer.name}</Name>
                <Type>{`${beer.abv} / ${beer.vol} / ${beer.type}`}</Type>
              </NameAndTypeContainer>
            </StyledBeerInfo>
            <StyledArrow className={expanded === i ? "arrowUp" : "arrowDown"} />
          </StyledBeerItem>

          <StyledBeerDropdown
            className={expanded === i ? "expanded" : "collapsed"}
          >
            <Type>{beer.about}</Type>
            <span>
              <a href={`/breweries/${beer.brewery}`}>
                <Type>{beer.brewery}</Type>
              </a>
            </span>
          </StyledBeerDropdown>
        </ListItem>
      ))}
    </>
  );
}

export default BeerListItem;
