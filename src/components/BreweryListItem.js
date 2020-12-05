import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

//import styled components
import {
  ListItem,
  ListImage,
  NameAndTypeContainer,
  Name,
  Type,
  RightValue,
} from "./styled/listStyled";

const StyledBreweryInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const StyledBreweryLogo = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 60px;
  }
`;

function BreweryListItem({ data }) {
  //Toggle data in or out with function
  //   const [toggleInfo, setToggleInfo] = useState(new Array(data.length))

  //   function handleClick(i) {
  //     // alert("wow. component was clicked. amazing.");
  //     const tempArray = [...toggleInfo];
  //     tempArray[i] = !tempArray[i]
  //     setToggleInfo(tempArray)
  //   }{/* {toggleInfo[i] && <h4>{brewery.address}</h4> } */}
  //

  return (
    <>
      {data.map((brewery, i) => (
        <Link key={brewery.id} to={`/breweries/${brewery.name}`}>
          <ListItem className="brewlistitem__brewery">
            <StyledBreweryInfo>
              <StyledBreweryLogo>
                <img src={brewery.logoSrc} alt="" />
              </StyledBreweryLogo>
              <NameAndTypeContainer>
                <Name>{brewery.name}</Name>
                <Type>{brewery.type}</Type>
              </NameAndTypeContainer>
            </StyledBreweryInfo>  
            <RightValue>{brewery.catalog.length}</RightValue>
          </ListItem>
        </Link>
      ))}
    </>
  );
}

export default BreweryListItem;
