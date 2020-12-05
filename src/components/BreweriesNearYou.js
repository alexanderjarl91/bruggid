import React, { useEffect, useState } from "react";
import * as geolib from 'geolib';


function BreweriesNearYou({breweries}) {
    const [position, setPosition] = useState(null)
    const [nearestBreweries, setNearestBreweries] = useState([])


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (response) { 
                setPosition({latitude: response.coords.latitude, longitude: response.coords.longitude})},
           function (error) { console.error(error)},
            {timeout: 1000*60, enableHighAccuracy: true, maximumAge: 1000*60*60}, 
        ); 
    }, [])

    console.log(position)
    
    if (!position) {
        return 'No location found'
    } else
        {
            const breweriesCoords = breweries.map((brewery) => 
            ({latitude: brewery.latitude, longitude: brewery.longitude}) 
            )
            console.log(breweriesCoords)

            const orderdByNearest = geolib.orderByDistance(position, breweriesCoords)
            console.log('Nearest:', orderdByNearest)

            // Maby map breweries again find the nearest four coords that match ... and get name and dist and convert it
            // const dist = geolib.getDistance(position, breweriesCoords)
            // console.log(dist)
        }
    

   
    
 



 


    // Geolib functions
    // getDistance(start, end, accuracy = 1)
    // findNearest(point, arrayOfPoints)
    // orderByDistance(point, arrayOfPoints)
    // convertDistance(value, unit) - Converts a given distance (in meters) into another unit.

    // Map breweries for their coordinates, orderByDistance, return 4 of the nearest, get their distance
    // and then convert their distance
    // Set longitude and latitude in state?
    // Set Nearest breweries to state


    return (
        <>
        
        </>
    )
}

export default BreweriesNearYou;