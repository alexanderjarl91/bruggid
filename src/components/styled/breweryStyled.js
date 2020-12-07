import styled from "styled-components";

export const BreweryView = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-row: repeat(3, auto);
`
// Logo
export const BreweryLogo = styled.div`
    width: 100%;
    margin: 24px 0px 36px 0px;
    display: flex;
    justify-content: center;
`

export const BreweryLogoContainer = styled.div`
    background: #ffffff;
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.theme.accent};
    border-radius: 50%;
    box-shadow: 0 12px 0 ${props=>props.theme.accent};
`

export const BreweryLogoImg = styled.img`
    max-width: 80%;
    max-height: 80%;
`

export const BreweryInfo = styled.div`
    background: ${props => props.theme.accent};
    border-radius: 20px 20px 0 0;
    ${'' /* filter: drop-shadow(0px -2px 6px rgba(42, 42, 42, 0.4)); */} /* Ef ég set filter á þetta þá hoppar hann framfyrir lista compónentinn... held það sé ehv. að skarast á við box-shadowinn... */ 
    box-shadow: 0 40px 0 ${props => props.theme.accent}; /* Box shadow adds color behind the next element without a mess */
    padding: 24px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export const BreweryInfoTitle = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-bottom: 12px;

    & h2 {
        color: ${props => props.theme.light};
        margin-bottom: 6px;
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: bold;
    }
    
    & p {
        font-weight: bold;
    }
`

export const BreweryInfoDesc = styled.div`
    max-height: 160px;
    overflow: scroll;
    margin-bottom: 24px;
`

export const BreweryInfoLinks = styled.div`
    display: flex;

    & a {
        margin-left: 6px;
        margin-right: 6px;
    }
`


// Brewery Details page reuses the List Component from listViewStyled