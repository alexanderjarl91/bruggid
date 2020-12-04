import React from "react";
import { Link } from "react-router-dom";

//import styled components
import {
  ListItem,
  ListImage,
  NameAndTypeContainer,
  Name,
  Type,
  RightValue,
} from "./styled/listStyled";

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
        <Link to={`/breweries/${brewery.name}`}>
          <ListItem key={brewery.id} className="brewlistitem__brewery">
            <ListImage src={brewery.logoSrc} alt="" />
            <NameAndTypeContainer>
              <Name>{brewery.name}</Name>
              <Type>{brewery.type}</Type>
            </NameAndTypeContainer>
            <RightValue>{brewery.catalog.length}</RightValue>
          </ListItem>
        </Link>
      ))}
    </>
  );
}

export default BreweryListItem;
