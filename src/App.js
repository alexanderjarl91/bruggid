import React, {useEffect, useState} from 'react';
import './App.css';
import Brewery from './components/Brewery'

function App() {

  //state for breweries declared
  const [breweries, setBreweries] = useState()
  
  // fetching data from Brugg API, should be passed down to children as props 
  // EDIT: WORKING, BUT WHY DOES IT LOG "HAS MISSING DEPENDENCY"?
  useEffect(function () {
    async function getData() {
      const url = "https://brugg-api.herokuapp.com/breweries";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setBreweries(data)
      console.log(breweries)
    }
    getData()
  }, [])

  return (
    <div className="App">
      {/* Navbar */}

      {/* Landing Page */}

      {/* Breweries */}
      <Brewery />

      {/* Brewery Map */}

    </div>
  );
}

export default App;
