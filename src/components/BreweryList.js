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

  return (
    <div>
      <Link to="/">
        <button>back</button>
      </Link>
      <input type="text" />
      <ul>
        <BreweryListItem data={filteredBreweries} />
        {/* this should show modal on click */}
      </ul>

      <Nav />
    </div>
  );
}

export default BreweryList;
