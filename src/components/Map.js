// Import React hooks
import React, { useState, useEffect } from "react";
// Import dependencies
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import { Icon } from "leaflet";

// Import icons
import beer from "../img/beer-bottle.svg";
import location from "../img/location-icon.svg";

// Import components
import BreweriesNearYou from "./BreweriesNearYou";
import Nav from "./Nav";
import {
  ListComponent,
  ListInfo,
  ListTitle,
  ListHeaders,
} from "./styled/listViewStyled";
import Header from "./Header";

function Map() {
  // Access token, style id and user name set in .env variable.
  // const mapboxUrl = `https://api.mapbox.com/styles/v1/${process.env.REACT_APP_USER_NAME}/${process.env.REACT_APP_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`

  const userName = "bjorgg";
  const styleId = "cki0d23hv26h01alu0fu4e7xb";
  const accessToken =
    "pk.eyJ1IjoiYmpvcmdnIiwiYSI6ImNraTBjdjR2bTJ5dXMycGt6dGtobjgyZ2UifQ.eNui5MdJCiPoaQF3c6UgjA";
  const mapboxUrl = `https://api.mapbox.com/styles/v1/${userName}/${styleId}/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`;

  const [position, setPosition] = useState(null)
  const [breweries, setBreweries] = useState();

  // Effect hook for the api fetch
  useEffect(() => {
    // Fetch from the Brugg API.
    fetch("https://dry-stream-05871.herokuapp.com/breweries")
      // Return json.
      .then((r) => r.json())
      // Set data to breweries.
      .then((data) => setBreweries(data))
      // Catching errors
      .catch((error) => console.error(error));
  }, []);

  console.log(breweries)
  
  // Icon constructor for map markers
  const beerIcon = new Icon({
      iconUrl: beer,
      iconSize: [35, 35],
      popupAnchor:  [0, -19]
  });

  // Icon constructor for map user location marker
  const locationIcon = new Icon({
    iconUrl: location,
    iconSize: [25, 25],
    popupAnchor: [0, -12],
  });

  // When map is created, locate user after two seconds
  function handleMapCreated(map) {
    setTimeout(() => {
      map.locate();
    }, 2000);
  }

  // Location marker component
  function LocationMarker() {
    // Using map events
    const map = useMapEvents({
      // If user location found, set it to position and fly to the location
      locationfound(e) {
          setPosition(e.latlng)
          map.flyTo(e.latlng, 11)
        },
      });
      // If position has value, return a marker and a popup to that location
      return position === null ? null : (
        <Marker position={position} icon={locationIcon}>
          <Popup keepInView={true} className='popup-style'>You are here</Popup>
        </Marker>
      );
  }
  console.log(position)

    return (
    <>  
    <Header/>
      {/* Map */}
      <div id='mapid'>
          {/* Returning React-Leaflet map components with Mapbox tile layer */}
          <MapContainer center={[64.9841821, -18.1059013]} zoom={5} scrollWheelZoom={false} zoomControl={false} whenCreated={handleMapCreated}>
            <TileLayer url= {mapboxUrl} />
            <ZoomControl position="topright"/>

            {/* When breweries array has objects, map it and return markers and popups
            to each position with brewery name and address */}
            {breweries && breweries.length > 0 ? (
               breweries.map((brewery) => (
                <div key={brewery.id}>
                  <Marker position={[brewery.latitude, brewery.longitude]} icon={beerIcon}>
                  <Popup keepInView={true} className='popup-style'>
                    {brewery.name} <br /> {brewery.address}
                  </Popup>
                </Marker>
              </div>
              ))): ''}

            {/* When breweries array has objects, return location marker component */}
            {breweries && breweries.length > 0 ? (
              <LocationMarker />
            ): ''}
            
          </MapContainer>
       </div>
          
          {/* Breweries near you */}
          <ListComponent>
            <ListInfo>
              <ListTitle>Breweries Near You</ListTitle>
              <ListHeaders>
                <p></p>
                <p>Distance</p>
              </ListHeaders>
            </ListInfo>
            {/* Breweries near you component with position and breweries props */}
            <BreweriesNearYou position={position} breweries={breweries}/>
          </ListComponent>
      
    <Nav />
    </>
  );
}

export default Map;
