import React, { useState } from "react";

function getBeerKey ({beerName, beerABV}) {
    return `${beerName}_${beerABV}`
}

function toggleIcon (beer, storageKey) {
    let storedItems = getStoredItems(storageKey);
    const beerKey = getBeerKey(beer);

    if (storedItems.includes(beerKey)) {
        storedItems = storedItems.filter(storedKey => storedKey !== beerKey);
    } else {
        storedItems.push(beerKey);
    }
    
    localStorage.setItem(storageKey, JSON.stringify(storedItems))
}

function getStoredItems(storageKey) {
    try {
        return JSON.parse(localStorage.getItem(storageKey)) || [];
    }
    catch {
        return [];
    }

}

function isStoredForKey(beerKey, storageKey) {
    return getStoredItems(storageKey).includes(beerKey);
}

const LocalStorageButton = ({beer, Icon, storageKey}) => {
    const beerKey = getBeerKey(beer);
    const [isStored, setStored] = useState(isStoredForKey(beerKey, storageKey));

    const toggle = (beer) => {
        console.log(beer)
        toggleIcon(beer, storageKey);
        setStored(isStoredForKey(beerKey, storageKey));
      };

    return (
        <Icon className={isStored ? 'stored' : ''} onClick={()=> toggle(beer)} />
    )
}

export default LocalStorageButton;