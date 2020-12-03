import styled from "styled-components";

export const Button = styled.button`
    appearance: none;
    background-color: ${props => props.theme.light};

    font-weight: bold;
    font-size: 1.5rem;
    
    padding: 8px;
    width: 100%;

    appearance: none;
    height: 64px;
    width: 100%;

    font-weight: bold;
    font-size: 16px;
    color: ${props => props.theme.dark};
    text-transform: uppercase;

    background-color: ${props => props.theme.light};
    border: 2px solid ${props => props.theme.dark};;
    border-radius: 20px;
    box-shadow: 0 12px 0 ${props => props.theme.dark};;

    transition: margin 200ms ease-in-out, box-shadow 200ms ease-in-out;

    &:hover, &:active {
        margin-top: 24px;
        box-shadow: 0 0 0 #2a2a2a;
    }

`;