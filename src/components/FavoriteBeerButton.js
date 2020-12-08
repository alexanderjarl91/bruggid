import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Heart } from "../img/favoriteHeart.svg";

const StyledHeart= styled(Heart)`
  fill: ${props => props.isFavorite ? '#f8513d' : 'white'};
`;

function getBeerKey ({beerName, beerABV}) {
    return `${beerName}_${beerABV}`
}

function toggleFavoriteBeer (beer) {
    let favoriteBeers = getFavoriteBeers();
    const beerKey = getBeerKey(beer);

    if (favoriteBeers.includes(beerKey)) {
        favoriteBeers = favoriteBeers.filter(storedKey => storedKey !== beerKey);
    } else {
        favoriteBeers.push(beerKey);
    }
    
    localStorage.setItem('favoriteBeers', JSON.stringify(favoriteBeers))
}

function getFavoriteBeers() {
    try {
        return JSON.parse(localStorage.getItem('favoriteBeers')) || [];
    }
    catch {
        return [];
    }

}

function isFavoriteBeer(beerKey) {
    return getFavoriteBeers().includes(beerKey);
}

const FavoriteBeerButton = ({beer}) => {
    const beerKey = getBeerKey(beer);
    const [isFavorite, setFavorite] = useState(isFavoriteBeer(beerKey));

    const toggleFavorite = (beer) => {
        toggleFavoriteBeer(beer);
        setFavorite(isFavoriteBeer(beerKey));
      };

    return (
        <StyledHeart  onClick={()=> toggleFavorite(beer)} isFavorite={isFavorite}/>
    )
}

export default FavoriteBeerButton;