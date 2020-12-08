import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import { Icon } from "leaflet";
import beer from "../img/beer-bottle.svg";
import location from "../img/location-icon.svg";

//import components
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

  const [position, setPosition] = useState(null);
  const [breweries, setBreweries] = useState([]);

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

  console.log(breweries);

  // Icon constructor for map marker
  const beerIcon = new Icon({
    iconUrl: beer,
    // Skoða hvort það sé hægt að setja stærð í % eða rem ... líka á hinu iconinu
    iconSize: [35, 35],
    popupAnchor: [0, -19],
  });

  // Icon constructor for map marker
  const locationIcon = new Icon({
    iconUrl: location,
    iconSize: [25, 25],
    popupAnchor: [0, -12],
  });

  function handleMapCreated(map) {
    setTimeout(() => {
      map.locate();
    }, 2000);
  }

  // Setting a marker and fly to user location if allowed
  function LocationMarker() {
    const map = useMapEvents({
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, 11);
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={locationIcon}>
        <Popup keepInView={true} className="popup-style">
          You are here
        </Popup>
      </Marker>
    );
  }
  console.log(position);

  return (
    <>
      <Header />
      <div id="mapid">
        <MapContainer
          center={[64.9841821, -18.1059013]}
          zoom={5}
          scrollWheelZoom={false}
          zoomControl={false}
          whenCreated={handleMapCreated}
        >
          <TileLayer
            // attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a>
            // contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>,
            // Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
            url={mapboxUrl}
          />
          <ZoomControl position="topright" />

          {breweries && breweries.length > 0
            ? breweries.map((brewery) => (
                <div key={brewery.id}>
                  <Marker
                    position={[brewery.latitude, brewery.longitude]}
                    icon={beerIcon}
                  >
                    <Popup keepInView={true} className="popup-style">
                      {brewery.name} <br /> {brewery.address}
                    </Popup>
                  </Marker>
                </div>
              ))
            : ""}

          {breweries && breweries.length > 0 ? <LocationMarker /> : ""}
        </MapContainer>
      </div>
      <ListComponent>
        <ListInfo>
          <ListTitle>Breweries Near You</ListTitle>
          <ListHeaders>
            <p></p>
            <p>Distance</p>
          </ListHeaders>
        </ListInfo>
        <BreweriesNearYou position={position} breweries={breweries} />
      </ListComponent>

      <Nav />
    </>
  );
}

export default Map;
