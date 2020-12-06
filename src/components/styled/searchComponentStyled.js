// Search component container
export const searchComponent = styled.div`
    flex: 1;
    min-height: 160px;
    color: #f9f9f9;
    display: flex;
    flex-flow: column nowrap;
`
// Search bar
export const searchBar = styled.input`
    align-self: flex-end;
    font-family: inherit;
    width: 60vw;
    height: 80px;
    padding-left: 12px;
    border: 3px solid #f8513d;
    border-top: 0;
    border-right: 0;
    border-radius: 0 0 0 20px;
    outline: 0;
    background: transparent;
    font-size: 1rem;
    color: #f9f9f9;

    &::placeholder {
        color: #cdcdcd;
    }
`

// Sort bar
export const sortBar = styled.div`
    background: #f8513d;
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
export const sortBarSelect = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem;
`

export const arrow = styled.img`
    transition: transform 200ms ease-in-out;

    ${props => {
    switch (props.direction) {
        case "up":
            return "transform: rotate(180deg);";
        case "left":
            return "transform: rotate(90deg);";
        case "right":
            return "transform: rotate(270deg);";
        case "down":
            return "transform: rotate(0deg);"
    }

    return "transform: rotate(0deg);"
    }}
`
// Dropdown + button styles
export const sortBarDropdown = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 2px solid #f9f9f9;

    ${props => {
        if (props.hidden) {
            return "display: none;"
        }
    }}
`

export const btnSort = styled.button`
    appearance: none;
    width: 100%;
    background: #f9f9f9;
    border-radius: 20px;
    padding: 12px;
    border: none;
    font-weight: bold;
    color: #2a2a2a;
    margin: 0 6px;
`


