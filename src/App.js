import React, {useEffect, useState} from 'react';
import './App.css';
import Brewery from './components/Brewery'

function App() {
  const [breweries, setBreweries] = useState()
  //sækja api data, senda niður í children sem props

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

  // const [articles, setArticles] = useState([]);
  // const [filteredArticles, setFilteredArticles] = useState([]);

  // //useEffect hook to fetch fetch data asynchronously
  // useEffect(function () {
  //   async function getData() {
  //     const url =
  //       "https://newsapi.org/v2/top-headlines?country=us&apiKey=3420d4ca8bde49b08e991ed7a552e100";

  //     const response = await fetch(url);
  //     const data = await response.json();

  //     //when data is loaded, set state to all articles
  //     setArticles(data.articles);
  //     setFilteredArticles(data.articles);
  //   }
  //   getData();
  // }, []);



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
