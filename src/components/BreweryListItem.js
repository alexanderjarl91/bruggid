import React from "react";
import { Link } from "react-router-dom";

//import styled components
import { ListCard, ListCardInfo, ListCardTitle, ListContainer, ListCardImgContainer, ListCardImg } from "./styled/listViewStyled";


function BreweryListItem({ data = [] }) {
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
    <ListContainer>
      {data.map((brewery, i) => (
        <Link key={brewery.id} to ={`/breweries/${brewery.name}`}>
          <ListCard>
            <ListCardImgContainer>
              <ListCardImg src={brewery.logoSrc} alt="`{brewery.name} logo`" />
            </ListCardImgContainer>
            <ListCardInfo>
              <ListCardTitle>
                {brewery.name}
              </ListCardTitle>
              <p>{brewery.type}</p>
            </ListCardInfo>
            <p>{brewery.catalog.length}</p>
          </ListCard>
        </Link>
      ))}
    </ListContainer>
  );
}

export default BreweryListItem;
