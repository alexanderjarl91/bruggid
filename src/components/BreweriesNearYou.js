import React, { useEffect, useState } from "react";
import * as geolib from 'geolib';


function BreweriesNearYou({breweries}) {
    const [position, setPosition] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (response) { 
                setPosition({latitude: response.coords.latitude, longitude: response.coords.longitude})},
           function (error) { console.error(error)},
            {timeout: 1000*60, enableHighAccuracy: true, maximumAge: 1000*60*60}, 
        ); 
       
    }, [])

    console.log(position)
    
    // This needs conditional on position ...
    const nearest = breweries.map((brewery) => {
        const breweryCoord = ({latitude: brewery.latitude, longitude: brewery.longitude}) 
        return {name: brewery.name, breweryCoord, dist: geolib.getDistance(position, breweryCoord)}
    })
    .sort( (a, b) => a.dist - b.dist )
    const nearestBreweries = nearest.slice(0, 5)

    console.log(nearest)
    console.log(nearestBreweries)

    // convertDistance returns to many keys ... check that out

    return (
        <>
            {(position && nearestBreweries && nearestBreweries.length > 0) 
              ? nearestBreweries.map((brewery) => (
                <div key={brewery.name}>
                    <h2>{brewery.name}</h2> <h3>{geolib.convertDistance(brewery.dist, 'km')} km</h3>
                </div>
            ))

            : <p>Your location not found</p>
            }
        
        </>
    )
}

export default BreweriesNearYou;