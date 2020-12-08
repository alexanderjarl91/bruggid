import React, { useEffect, useState } from "react";
import * as geolib from 'geolib';

import { ListComponent } from "./styled/listViewStyled";

function BreweriesNearYou({breweries, position}) {
    const [nearestBreweries, setNearestBreweries] = useState()
    
    useEffect(() => {
        console.log(breweries)
        if (!position || breweries.length === 0) return
        const nearest = breweries.map((brewery) => {
            const breweryCoord = ({latitude: brewery.latitude, longitude: brewery.longitude}) 
            return {name: brewery.name, breweryCoord, dist: geolib.getDistance(position, breweryCoord)}
        })
        .sort( (a, b) => a.dist - b.dist )
        const copyOfNearest = nearest.slice(0, 5)

        setNearestBreweries(copyOfNearest)

    }, [position, breweries])
   

    function getKm(originalDistance) {
       const distance = geolib.convertDistance(originalDistance, 'km')
       return Math.round(distance * 10) / 10
    }

    return (
        <>
            <ListComponent>
                {(position && nearestBreweries && nearestBreweries.length > 0) 
                ? nearestBreweries.map((brewery) => (
                    <div key={brewery.name}>
                        <h2>{brewery.name}</h2> <h3>{getKm(brewery.dist)} km</h3>
                    </div>
                ))

                : <p>Waiting for your location</p>
                }
            </ListComponent>
        </>
    )
}

export default BreweriesNearYou;