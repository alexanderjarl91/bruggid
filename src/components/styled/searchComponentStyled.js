import styled from "styled-components";

// Search component container
export const SearchComponent = styled.div`
    flex: 1;
    min-height: 160px;
    color: ${props => props.theme.light};
    display: flex;
    flex-flow: column nowrap;
`
// Search bar
export const SearchBar = styled.input`
    align-self: flex-end;
    font-family: inherit;
    width: 60vw;
    height: 80px;
    padding-left: 12px;
    border: 3px solid ${props => props.theme.accent};
    border-top: 0;
    border-right: 0;
    border-radius: 0 0 0 20px;
    outline: 0;
    background: transparent;
    font-size: 1rem;
    color: ${props => props.theme.light};

    &::placeholder {
        color: #cdcdcd;
    }
`

// Sort bar
export const SortBar = styled.div`
    background: ${props => props.theme.accent};
    margin: 24px;
    min-height: 40px;
    display: flex;
    flex-flow: column;
    padding: 24px;
    border-radius: 20px;
    font-weight: bold;

    transition: height 200ms ease-in-out;
`

//Text and arrow
export const SortBarSelect = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem;
`

export const ArrowImg = styled.img`
    transition: transform 200ms ease-in-out;

    ${props => {
    switch (props.direction) {
        case "up":
            return "transform: rotate(180deg);";
        case "left":
            return "transform: rotate(90deg);";
        case "right":
            return "transform: rotate(270deg);";
        default:
            return "transform: rotate(0deg);"
        
    }
    }}
`
// Dropdown + button styles
export const SortBarDropdown = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 2px solid ${props => props.theme.light};

    ${'' /* ${props => {
        if (props.hidden) {
            return "display: none;"
        }
    }} */}
`

export const BtnSort = styled.button`
    appearance: none;
    width: 100%;
    background: ${props => props.theme.light};
    border-radius: 20px;
    padding: 12px;
    border: none;
    font-weight: bold;
    color: #2a2a2a;
    margin: 0 6px;
`


