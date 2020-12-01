import React from 'react'

function Sort({sortAZ, sortZA}) {
    return (
        <div>
            <h3>Sort and filter</h3>
            <button onClick={sortAZ}> A - Z</button>
            <button onClick={sortZA}>Z - A</button>
            <button>Established</button>
            <button>Beer Count</button>
        </div>
    )
}

export default Sort
