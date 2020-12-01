import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import beer from "../img/beer.svg";
import Nav from "./Nav";

function Map() {
  // Access token, style id and user name set in .env variable here for now. Need to find
  // another way later because this .env file will be included in the build and will not stay hidden.
  const userName = "bjorgg";
  const styleId = "cki0d23hv26h01alu0fu4e7xb";
  const accessToken =
    "pk.eyJ1IjoiYmpvcmdnIiwiYSI6ImNraTBjdjR2bTJ5dXMycGt6dGtobjgyZ2UifQ.eNui5MdJCiPoaQF3c6UgjA";
  const mapboxUrl = `https://api.mapbox.com/styles/v1/${userName}/${styleId}/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`;
  // Icon constructor for map marker
  const beerIcon = new Icon({
    iconUrl: beer,
    iconSize: [55, 55],
  });

  return (
    <div id="mapid">
      <MapContainer
        center={[65.94419333158635, -18.356791755646736]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={mapboxUrl}
        />
        <Marker
          position={[65.94419333158635, -18.356791755646736]}
          icon={beerIcon}
        >
          <Popup>
            <strong>Bruggsmiðjan Kaldi Brewery</strong> <br /> Öldugata 22, 621
            Árskógssandur
          </Popup>
        </Marker>
      </MapContainer>
      <Nav />
    </div>
  );
}

export default Map;
