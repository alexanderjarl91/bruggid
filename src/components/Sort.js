import React from 'react'

function Sort({sortAZ, sortZA, sortBeerCount, sortEstablished}) {
    return (
        <div>
            <h3>Sort and filter</h3>
            <button onClick={sortAZ}> A - Z</button>
            <button onClick={sortZA}>Z - A</button>
            <button onClick={sortEstablished}>Established</button>
            <button onClick={sortBeerCount}>Beer Count</button>
        </div>
    )
}

export default Sort
