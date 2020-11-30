import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Router, Route, Switch } from "react-router";
import './App.css';
import Brewery from './components/Brewery'

function App() {

  //STATES
  //declare original state, never altered nor displayed
  const [breweries, setBreweries] = useState([]) 

  //declare filtered version of original state, this one is used for displaying
  const [filteredBreweries, setFilteredBreweries] = useState([])

  //Fetching data from Brugg API using axios and the useEffect hook. breweries state will be set to the data and passed through props to children
  //SKOÐA WARNING UM CALLBACKS
  useEffect(async () => {
    const result = await axios('https://brugg-api.herokuapp.com/breweries');
    setBreweries(result.data)
    setFilteredBreweries(result.data)
  }, []);


  //returning components
  return (
    <div className="App">
      {/* Navbar */}

      {/* Landing Page */}

      {/* Breweries */}
      <Brewery data={filteredBreweries} />

      {/* Brewery Map */}

      {/* Footer */}

    </div>
  );
}

export default App;
