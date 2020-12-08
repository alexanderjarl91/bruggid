import styled from "styled-components";

//Mapview container
export const MapView = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-row: repeat(2, 1fr);
    overflow: hidden;
`

// List uses styles from listViewStyled
// Breweries Near You Distance
export const Distance = styled.h3`
    font-size: 1.125rem;
    font-weight: bold;
    color: ${props => props.theme.accent};
`

// Location
export const LocationWait = styled.div`
    text-align: center;
    margin: 12px;
    ${'' /* font-weight: bold; */}
    font-size: 1.125rem;
    color: ${props => props.theme.mid};

    & p:first-child {
       margin-bottom: 6px;
    }
`