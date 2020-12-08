import styled from "styled-components";

// Search component container
export const SearchComponent = styled.div`
    color: ${props => props.theme.light};
    display: flex;
    flex-flow: column nowrap;
`
// Search bar
export const SearchBar = styled.input`
    align-self: flex-end;
    font-family: inherit;
    width: 60vw;
    max-width: 500px;
    height: 60px;
    padding-left: 18px;
    border: 2px solid ${props => props.theme.accent};
    border-top: 0;
    border-right: 0;
    border-radius: 0 0 0 20px;
    outline: 0;
    background: ${props => props.theme.dark};
    font-size: 1.25rem;
    font-weight: bold;
    color: ${props => props.theme.light};
    box-shadow: 0 8px 0 ${props => props.theme.accent};

    &::placeholder {
        color: ${props => props.theme.mid};
    }
`

// Sort bar
export const SortBar = styled.div`
    background: ${props => props.theme.dark};
    margin: 24px;
    display: flex;
    flex-flow: column;
    padding: 12px 24px;
    border-radius: 20px;
    border: 2px solid ${props => props.theme.accent};
    box-shadow: 0 8px 0 ${props => props.theme.accent};
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

// Dropdown + button styles
export const SortBarDropdown = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 2px solid ${props => props.theme.light};
`

export const BtnSort = styled.button`
    appearance: none;
    width: 100%;
    background: ${props => props.theme.light};
    border-radius: 20px;
    padding: 12px;
    border: none;
    font-weight: bold;
    color: ${props => props.theme.dark};
    margin: 0 6px;
`


