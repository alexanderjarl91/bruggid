import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BreweryListItem from "./BreweryListItem";
import Nav from "./Nav";

function BreweryList() {
  //declare original state, never altered nor displayed
  const [breweries, setBreweries] = useState([]);
  //declare filtered version of original state, this one is used for displaying
  const [filteredBreweries, setFilteredBreweries] = useState([]);

  //Fetching data from Brugg API using axios and the useEffect hook. breweries state will be set to the data and passed through props to children
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://brugg-api.herokuapp.com/breweries");
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
    const text = e.target.value
    const searchValueData = breweries.filter((brewery) => (
      brewery.name && brewery.name.toUpperCase().includes(text.toUpperCase())) || 
      (brewery.address && brewery.address.toUpperCase().includes(text.toUpperCase())))


    console.log(text);
    setFilteredBreweries(searchValueData);
    console.log(searchValueData)
}

  return (
    <div>
      <Link to="/">
        <button>back</button>
      </Link>
      <input className="input" 
            type="text" 
            placeholder="Search for breweries" 
             onChange={filterData} 
            // onKeyPress={handleEnterKeyPressed}
            />
      <ul>
        <BreweryListItem data={filteredBreweries} />
        {/* this should show modal on click */}
      </ul>

      <Nav />
    </div>
  );
}

export default BreweryList;
