import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { Icon } from "leaflet";
import beer from "../img/beer-bottle.svg";
import location from "../img/location-icon.svg";

//import components
import { BackBtn } from "./styled/index";
import BeersNearYou from "./BeersNearYou";
import BeerOfTheDay from "./BeerOfTheDay";
import Nav from "./Nav";

function Map() {
  const [position, setPosition] = useState(null);
  const userName = "bjorgg";
  const styleId = "cki0d23hv26h01alu0fu4e7xb";
  const accessToken =
    "pk.eyJ1IjoiYmpvcmdnIiwiYSI6ImNraTBjdjR2bTJ5dXMycGt6dGtobjgyZ2UifQ.eNui5MdJCiPoaQF3c6UgjA";
  const mapboxUrl = `https://api.mapbox.com/styles/v1/${userName}/${styleId}/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`;
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    // Fetch from the Brugg API.
    fetch("https://brugg-api.herokuapp.com/breweries")
      // Return json.
      .then((r) => r.json())
      // Set data to breweries.
      .then((data) => setBreweries(data))
      // Catching errors
      .catch((error) => console.error(error));
  }, []);

  console.log(breweries);

  // Icon constructor for map marker
  const beerIcon = new Icon({
    iconUrl: beer,
    // Skoða hvort það sé hægt að setja stærð í % eða rem ... líka á hinu iconinu
    iconSize: [55, 55],
  });

  // Icon constructor for map marker
  const locationIcon = new Icon({
    iconUrl: location,
    iconSize: [35, 35],
  });

  function handleMapCreated(map) {
    setTimeout(() => {
      map.locate();
    }, 3000);
  }

  // Setting a marker and fly to your location if allowed
  function LocationMarker() {
    const map = useMapEvents({
      locationfound(e) {
        setPosition(e.latlng);
        // Check if possible to make zoom and fly smoother
        map.setZoom(13);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={locationIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <div id="mapid">
      <MapContainer
        center={[64.9841821, -18.1059013]}
        zoom={6}
        scrollWheelZoom={false}
        whenCreated={handleMapCreated}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> 
                contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, 
                Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={mapboxUrl}
        />

        {breweries && breweries.length > 0
          ? breweries.map((brewery) => (
              <div key={brewery.id}>
                <Marker
                  position={[brewery.latitude, brewery.longitude]}
                  icon={beerIcon}
                >
                  {/* Breyta staðsetningu á popup miðað við marker */}
                  <Popup>
                    <img src={brewery.logoSrc} alt="" />
                    <strong>{brewery.name}</strong> <br /> {brewery.address}
                  </Popup>
                </Marker>
              </div>
            ))
          : ""}

        {breweries && breweries.length > 0 ? <LocationMarker /> : ""}
      </MapContainer>
      <Nav />
    </div>
  );
}

export default Map;
