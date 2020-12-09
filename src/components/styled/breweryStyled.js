import styled from "styled-components";

export const BreweryView = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-row: repeat(3, auto);
    overflow: hidden;

    @media (min-width: 1024px) {
        padding-left: 120px;
        grid-template-columns: 2fr 1fr;
        grid-gap: 24px;
    }

    ${'' /* Leyfa hæð 150vh þar sem hæð er minni en 700px svo hægt sé að sjá meira af bjórum í einu...*/}
    @media (max-height: 700px) {
        max-height: 150vh;
    }
`
// Logo
export const BreweryLogo = styled.div`
    width: 100%;
    margin: 24px 0px 24px 0px;
    display: flex;
    justify-content: center;

    @media (min-width: 1024px) {
        margin: 0;
        align-items: flex-end;
        padding-right: 24px;
    }
`



export const BreweryLogoContainer = styled.div`
    background: #ffffff;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.theme.accent};
    border-radius: 50%;
    box-shadow: 0 4px 0 ${props=>props.theme.accent};

    @media (min-width: 1024px) {
        width: 200px;
        height: 200px;
        margin-bottom: 12px;
    }

    @media (max-height: 700px) {
        height: 80px;
        width: 80px;
    }
`

export const BreweryLogoImg = styled.img`
    max-width: 80%;
    max-height: 80%;
`

export const BreweryInfo = styled.div`
    background: ${props => props.theme.accent};
    border-radius: 20px 20px 0 0;
    box-shadow: 0 40px 0 ${props => props.theme.accent}; /* Box shadow adds color behind the next element without a mess */
    padding: 24px 24px 0px 24px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    @media (min-width: 1024px) {
        margin-right: 24px;
    }
`

export const BreweryInfoTitle = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;

    & h2 {
        color: ${props => props.theme.light};
        text-transform: uppercase;
        font-size: 1.8rem;
        font-weight: bold;
        margin: 6px 0;
    }
    
    & p {
        font-weight: bold;
    }
`

export const BreweryInfoDesc = styled.div`
    overflow: auto;

    & p {
        padding-bottom: 12px;
    }

    @media (max-width: 1024px) {
        display: none;
    }
`

export const BreweryInfoLinks = styled.div`
    display: flex;
    margin: 12px;

    & a {
        
        margin-left: 9px;
        margin-right: 9px;
    }
`


// Brewery Details page reuses the List Component from listViewStyled