import styled from "styled-components";

//Listview container
export const listView = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-flow: column nowrap;
`

// See searchBarStyled.js for search/sort filter portion of list view

// List component
export const listComponent = styled.div`
    background: #f9f9f9;
    border-radius: 20px 20px 0 0;
    flex: 1;
    max-height: 75vh; /* This height could be adjusted to reuse this component...*/
    display: flex;
    flex-direction: column;
`

// List component header stuff
export const listInfo = styled.div`
    margin: 24px 24px 4px 24px;
`

export const listHeaders = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: #cdcdcd;
    text-transform: uppercase;

    margin-left: 96px;
`

// Container for the list render
export const listContainer = styled.div`
    overflow: scroll;
    border-top: 1px solid #cdcdcd;
`

// Card
export const listCard = styled.div`
    border-bottom: 1px solid #cdcdcd;
    padding: 12px 24px;
    display: flex;
    align-items: center;

    &:last-child {
        margin-bottom: 100px;
        border-bottom: 0;
    }
`

export const listCardImgContainer = styled.div`
    background: #ffffff;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 16px;
`
export const listCard = styled.img`
    width: 80%;
    max-height: 80%;
`

export const listCardInfo = styled.div`
    flex: 1;
`
export const listCardTitle = styled.h3`
    margin-bottom: 6px;
    font-size: 1.125rem;
    font-weight: bold;
`
