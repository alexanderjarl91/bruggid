//import libraries
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import Map from "./components/Map";
import BeerList from "./components/BeerList";
import BreweryList from "./components/BreweryList";
import Brewery from "./components/Brewery";
import Nav from "./components/Nav";

//import style
import "./App.css";

function App() {
  //STATES

  //declare original state, never altered nor displayed
  const [breweries, setBreweries] = useState([]);

  //declare filtered version of original state, this one is used for displaying
  const [filteredBreweries, setFilteredBreweries] = useState([]);

  //Fetching data from Brugg API using axios and the useEffect hook. breweries state will be set to the data and passed through props to children
  //SKOÐA WARNING UM CALLBACKS
  useEffect(async () => {
    const result = await axios("https://brugg-api.herokuapp.com/breweries");
    setBreweries(result.data);
    setFilteredBreweries(result.data);
    console.log(result.data); 
  }, []);

  //returning components
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/breweries" exact component={BreweryList} />
          <Route path="/beers" component={BeerList} />
          <Route path="/" exact component={Map} />
          <Route path="/breweries/id" component={Brewery} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
