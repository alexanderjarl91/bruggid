import styled from "styled-components";

//Mapview container
export const MapView = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-row: repeat(2, 1fr);
    overflow: hidden;
    background: #252525;

    @media (min-width: 1024px) {
        padding-left: 120px;
        grid-template-rows: 1;
        grid-template-columns: 1fr 1fr;
    }
`

export const MapComponent = styled.div`
    min-height: 30vh;

    @media (min-width: 1024px) {
        height: 100vh;
    }
`

// List uses styles from listViewStyled
// Breweries Near You Distance
export const Distance = styled.h3`
    font-size: .9rem;
    font-weight: bold;
    color: ${props => props.theme.accent};
`

// Location
export const LocationWait = styled.div`
    text-align: center;
    margin: 24px;
    ${'' /* font-weight: bold; */}
    font-size: 1.125rem;
    color: ${props => props.theme.mid};

    & p:first-child {
       margin-bottom: 6px;
    }
`