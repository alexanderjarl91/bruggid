import React, { useEffect, useState } from "react";
import getDistance from 'geolib/es/getDistance';

function BreweriesNearYou({breweries}) {
    const [position, setPosition] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(response){ setPosition([response.coords.latitude, response.coords.longitude])},
            function(error)   { console.error(error)},
            {timeout: 1000*60, enableHighAccuracy: true, maximumAge: 1000*60*60}, 
        ); 
    }, [])

    console.log(position)
   
    // Geolib functions
    // getDistance(start, end, accuracy = 1)
    // findNearest(point, arrayOfPoints)
    // orderByDistance(point, arrayOfPoints)
    // convertDistance(value, unit) - Converts a given distance (in meters) into another unit.

    


    return (
        <>
        
        </>
    )
}

export default BreweriesNearYou;