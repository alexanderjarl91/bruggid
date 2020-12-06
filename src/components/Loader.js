import React from "react";
import styled from "styled-components";
import {ReactComponent as LoadingBeer} from '../img/loading-bottle.svg'

const LoaderContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const LoadingBeerContainer = styled.div`
    width: 250px;
    max-height: 300px;
    height: 50vh;
    margin: 12px;
`;

const LoadingText = styled.div`
    width: 250px;
    max-width: 100vw;
    margin: 12px;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    color: ${props => props.theme.light}
`;

function Loader() {

    return (
        <LoaderContainer>
            <LoadingBeerContainer>
                <LoadingBeer/>
            </LoadingBeerContainer>
            <LoadingText>Bringing Icelandic breweries to you ...</LoadingText>
        </LoaderContainer>
    );
}

export default Loader;