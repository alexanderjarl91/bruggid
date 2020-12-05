//import libraries
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import components
import Map from "./components/Map";
import BeerList from "./components/BeerList";
import BreweryList from "./components/BreweryList";
//import Brewery from "./components/Brewery";
import BreweryDetails from "./components/BreweryDetails";
import Loader from "./components/Loader";

//import style
import "./App.css";

//import theme
import { ThemeProvider } from "styled-components";
import * as orange from "./components/styled/theme/orange";

function App() {
  // Loading default true
  const [loading, setLoading] = useState(true);

  // Changes to false after 2.5 seconds
  setTimeout(() => {
    setLoading(false);
  }, 2500);

  //returning components
  return (
    <Router>
      <ThemeProvider theme={orange}>
        <div className="App">
          {/* Ternary operator that renders loader if loading === true but the switch element if loading === false */}
          {loading ? (
            <Loader />
          ) : (
            <Switch>
              <Route path="/breweries" exact component={BreweryList} />
              <Route path="/beers" component={BeerList} />
              <Route path="/" exact component={Map} />
              <Route
                path="/breweries/:breweryName"
                component={BreweryDetails}
              />
            </Switch>
          )}
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
