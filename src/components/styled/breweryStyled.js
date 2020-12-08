import styled from "styled-components";

export const BreweryView = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-row: repeat(3, auto);
    overflow: hidden;
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
    width: 120px;
    height: 120px;
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
    box-shadow: 0 40px 0 ${props => props.theme.accent}; /* Box shadow adds color behind the next element without a mess */
    padding: 24px 24px 0px 24px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export const BreweryInfoTitle = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    & h2 {
        color: ${props => props.theme.light};
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: bold;
    }
    
    & p {
        font-weight: bold;
        margin-bottom: 6px;
    }
`

export const BreweryInfoDesc = styled.div`
    max-height: 120px;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;

    & p {
        padding-bottom: 12px;
    }
`

export const BreweryInfoLinks = styled.div`
    display: flex;
    margin: 12px;

    & a {
        margin-left: 6px;
        margin-right: 6px;
    }
`


// Brewery Details page reuses the List Component from listViewStyled