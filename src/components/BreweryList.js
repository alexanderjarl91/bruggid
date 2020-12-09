import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BreweryListItem from "./BreweryListItem";
import Nav from "./Nav";
import Header from "./Header";
import Sort from "./Sort";

//import styled components
import { SearchBar, SearchComponent, SortBar } from "./styled/searchComponentStyled";
import { ListComponent, ListView, ListInfo, ListTitle, ListHeaders, ListContainer } from "./styled/listViewStyled";


function BreweryList() {
  //declare original state, never altered nor displayed
  const [breweries, setBreweries] = useState([]);
  //declare filtered version of original state, this one is used for displaying
  const [filteredBreweries, setFilteredBreweries] = useState([]);

  //Fetching data from Brugg API with the useEffect hook. breweries state will be set to the data and passed through props to children
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://dry-stream-05871.herokuapp.com/breweries");
        response = await response.json();
        setBreweries(response);
        setFilteredBreweries(response);
        console.log(response);
      } catch (err) {
        alert(err);
      }
    }
    fetchData();
  }, []);

  //search bar
  function filterData(e) {
    const text = e.target.value;
    //filter through data from input value text. values and data uppercased so searchbar is not case sensitive.
    const searchValueData = breweries.filter(
      (brewery) =>
        (brewery.name &&
          brewery.name.toUpperCase().includes(text.toUpperCase())) ||
        (brewery.address &&
          brewery.address.toUpperCase().includes(text.toUpperCase()))
    );

    console.log(text);
    setFilteredBreweries(searchValueData);
    console.log(searchValueData);
  }

  //SORT FUNCTIONS
  function sortAZ() {
    const filteredBreweriesCopy = filteredBreweries.slice(0);
    // if a.name is higher in alphabet, send it up in the array
    filteredBreweriesCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
    setFilteredBreweries(filteredBreweriesCopy);
  }

  function sortZA() {
    const filteredBreweriesCopy = filteredBreweries.slice(0);
    // if a.name is higher in alphabet, send it down in the array
    filteredBreweriesCopy.sort((a, b) => (a.name > b.name ? -1 : 1));
    setFilteredBreweries(filteredBreweriesCopy);
  }

  function sortBeerCount() {
    const filteredBreweriesCopy = filteredBreweries.slice(0);
    filteredBreweriesCopy.sort((a, b) =>
      a.catalog.length > b.catalog.length ? -1 : 1
    );
    setFilteredBreweries(filteredBreweriesCopy);
  }

  function sortEstablished() {
    const filteredBreweriesCopy = filteredBreweries.slice(0);
    filteredBreweriesCopy.sort((a, b) =>
      a.established > b.established ? 1 : -1
    );
    setFilteredBreweries(filteredBreweriesCopy);
  }

  return (
    <>
    <Header/>
  <ListView>
    <SearchComponent>
      <SearchBar
        type="text"
        placeholder="Search"
        onChange={filterData}
      />
      <Sort
        sortAZ={sortAZ}
        sortZA={sortZA}
        sortBeerCount={sortBeerCount}
        sortEstablished={sortEstablished} 
      />
    </SearchComponent>
    <ListComponent>
      <ListInfo>
        <ListTitle>Breweries</ListTitle>
        <ListHeaders>
          <p>Brewery Type</p>
          <p>No. Beers</p>
        </ListHeaders>
      </ListInfo>
        <BreweryListItem data={filteredBreweries} />
    </ListComponent>
  </ListView>
  <Nav/>
  </>
  );
}

export default BreweryList;
