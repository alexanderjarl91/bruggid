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
  const userName = "bjorgg";
  const styleId = "cki0d23hv26h01alu0fu4e7xb";
  const accessToken =
    "pk.eyJ1IjoiYmpvcmdnIiwiYSI6ImNraTBjdjR2bTJ5dXMycGt6dGtobjgyZ2UifQ.eNui5MdJCiPoaQF3c6UgjA";
  const mapboxUrl = `https://api.mapbox.com/styles/v1/${userName}/${styleId}/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`;

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

  // const [zoom, setZoom] = useState()

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
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
      <BackBtn />
      <MapContainer
        center={[64.9841821, -18.1059013]}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> 
                contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, 
                Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={mapboxUrl}
        />
        <Marker
          position={[65.94419333158635, -18.356791755646736]}
          icon={beerIcon}
        >
          {/* Breyta staðsetningu á popup miðað við marker */}
          <Popup>
            <strong>Bruggsmiðjan Kaldi Brewery</strong> <br /> Öldugata 22, 621
            Árskógssandur
          </Popup>
        </Marker>
        <LocationMarker />
      </MapContainer>

      <BeersNearYou />
      <BeerOfTheDay />
      <Nav />
    </div>
  );
}

export default Map;
