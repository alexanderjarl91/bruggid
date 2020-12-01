import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import BeerListItem from "./BeerListItem";

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

  //split array with split method with % as parameter, parseInt the array to sort by ABV%

  return (
    <div>
      <Link to="/">
        <button>back</button>
      </Link>
      <input
        className="input"
        type="text"
        placeholder="Search for breweries"
        onChange={filterBeers}
        // onKeyPress={handleEnterKeyPressed}
      />
      <ul>
        <BeerListItem data={filteredBeers} />
      </ul>

      <Nav />
    </div>
  );
}

export default BeerList;
