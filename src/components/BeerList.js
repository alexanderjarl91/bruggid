import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function BeerList() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://brugg-api.herokuapp.com/breweries");
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

  //split array with split method with % as parameter, parseInt the array to sort by ABV%

  return (
    <div>
      <Link to="/">
        <button>back</button>
      </Link>
      <input type="text" />
      <ul>
        <li>beer 1</li>
        <li>beer 2</li>
        <li>beer 3</li>
      </ul>

      <Nav />
    </div>
  );
}

export default BeerList;
