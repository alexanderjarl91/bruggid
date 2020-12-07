import React, { useEffect, useState } from "react";
import * as geolib from 'geolib';


function BreweriesNearYou({breweries, position}) {
    // const [position, setPosition] = useState(null)
    const [nearestBreweries, setNearestBreweries] = useState()

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(
    //         function (response) { 
    //             setPosition({latitude: response.coords.latitude, longitude: response.coords.longitude})},
    //        function (error) { console.error(error)},
    //         {timeout: 1000*60, enableHighAccuracy: true, maximumAge: 1000*60*60}, 
    //     ); 
       
    // }, [])

    // console.log(position)
    
    useEffect(() => {
        console.log(breweries)
        if (!position || breweries.length === 0) return
         // This needs conditional on position ...
        const nearest = breweries.map((brewery) => {
            const breweryCoord = ({latitude: brewery.latitude, longitude: brewery.longitude}) 
            return {name: brewery.name, breweryCoord, dist: geolib.getDistance(position, breweryCoord)}
        })
        .sort( (a, b) => a.dist - b.dist )
        const copyOfNearest = nearest.slice(0, 5)
        console.log(position)
        console.log(copyOfNearest)

        setNearestBreweries(copyOfNearest)

        // console.log(nearest)
        // console.log(nearestBreweries)
    }, [position, breweries])
   

    function getKm(originalDistance) {
       const distance = geolib.convertDistance(originalDistance, 'km')
       return Math.round(distance * 10) / 10
    }

    // convertDistance returns to many keys ... check that out

    return (
        <>
            {(position && nearestBreweries && nearestBreweries.length > 0) 
              ? nearestBreweries.map((brewery) => (
                <div key={brewery.name}>
                    <h2>{brewery.name}</h2> <h3>{getKm(brewery.dist)} km</h3>
                </div>
            ))

            : <p>Waiting for your location</p>
            }
        
        </>
    )
}

export default BreweriesNearYou;