import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import components
import Nav from "./Nav";
import BeerListItem from "./BeerListItem";
import SortBeers from "./SortBeers";

//import styled components
import { BackBtn } from "./styled";
import { HeaderContainer, SearchBar } from "./styled/SearchBarStyled";
import { ListHeader, ListHeaderText } from "./styled/listStyled";

function BeerList() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://brugg-api.herokuapp.com/beers");
        response = await response.json();
        setBeers(response);
        setFilteredBeers(response);
        console.log(response);
      } catch (err) {
        alert(err);
      }
    }
    fetchData();
  }, []);

  //search bar
  function filterBeers(e) {
    const text = e.target.value;
    //filter through data from input value text. values and data uppercased so searchbar is not case sensitive.
    const searchValueData = beers.filter(
      (beer) =>
        beer.name && beer.name.toUpperCase().includes(text.toUpperCase())
    );
    setFilteredBeers(searchValueData);
  }

  //SORT FUNCTIONS
  function sortAZ() {
    const filteredBeersCopy = filteredBeers.slice(0);
    filteredBeersCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
    setFilteredBeers(filteredBeersCopy);
  }

  function sortZA() {
    const filteredBeersCopy = filteredBeers.slice(0);
    filteredBeersCopy.sort((a, b) => (a.name > b.name ? -1 : 1));
    setFilteredBeers(filteredBeersCopy);
  }

  function sortType() {
    const filteredBeersCopy = filteredBeers.slice(0);
    filteredBeersCopy.sort((a, b) => (a.type > b.type ? 1 : -1));
    setFilteredBeers(filteredBeersCopy);
  }

  function sortABV() {
    const filteredBeersCopy = filteredBeers.slice(0);
    filteredBeersCopy.sort((a, b) =>
      parseFloat(a.abv) > parseFloat(b.abv) ? -1 : 1
    );
    setFilteredBeers(filteredBeersCopy);
    console.log(parseFloat(filteredBeersCopy[0].abv));
  }

  //split array with split method with % as parameter, parseInt the array to sort by ABV%

  return (
    <div>
      <HeaderContainer>
        <Link to="/">
          <BackBtn></BackBtn>
        </Link>
        <SearchBar
          className="input"
          type="text"
          placeholder="Search for beers.."
          onChange={filterBeers}
          // onKeyPress={handleEnterKeyPressed}
        />
      </HeaderContainer>
      <SortBeers
        sortAZ={sortAZ}
        sortZA={sortZA}
        sortType={sortType}
        sortABV={sortABV}
      />
      <ListHeader>
        <ListHeaderText>Beers</ListHeaderText>
      </ListHeader>
      <BeerListItem data={filteredBeers} />

      <Nav />
    </div>
  );
}

export default BeerList;
