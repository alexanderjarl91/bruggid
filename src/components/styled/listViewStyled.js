import styled from "styled-components";

//Listview container
export const ListView = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-row: repeat(2, auto);
    overflow: hidden;
`

// See searchBarStyled.js for search/sort filter portion of list view

// List component
export const ListComponent = styled.div`
    background: ${props => props.theme.light};
    border-radius: 20px 20px 0 0;
    ${'' /* height: 75vh; */}
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-bottom: 88px;
    filter: drop-shadow(0px -2px 6px rgba(42, 42, 42, 0.4));
`

// List component header stuff
export const ListInfo = styled.div`
    margin: 24px 24px 4px 24px;
`

export const ListTitle = styled.h2`
    font-weight: bold;
    font-size: 2rem;
`

export const ListHeaders = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: ${props => props.theme.mid};
    text-transform: uppercase;

    margin-left: 96px;
`

// Container for the list render
export const ListContainer = styled.div`
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    border-top: 1px solid #cdcdcd;
    color: #2a2a2a;
`

// Card
export const ListCard = styled.div`
    border-bottom: 1px solid #cdcdcd;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    color: #2a2a2a;

    ${prop => {
        if (prop.column) {
            return "flex-direction: column;"
        }
    }}
`

export const ListCardImgContainer = styled.div`
    background: #ffffff;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 16px;
`
export const ListCardImg = styled.img`
    max-width: 80%;
    max-height: 80%;
`

export const ListCardInfo = styled.div`
    flex: 1;
`
export const ListCardTitle = styled.h3`
    margin-bottom: 6px;
    font-size: 1.125rem;
    font-weight: bold;
`
// Dropdown and Inner menu for Beers card
export const InnerCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;


`

export const DropdownCard = styled.div`
    ${'' /* background: orange; */}
    padding-top: 12px;
    width: 100%;

    &.expanded {
    max-height: 250px;
    opacity: 1;
    transition: max-height 600ms ease, opacity 200ms ease;
    }

    &.collapsed {
    max-height: 0;
    opacity: 0;
    transition: max-height 300ms ease, opacity 200ms ease 100ms;
}
`

export const DropdownInfo = styled.div`
    display: flex;
    flex-direction: column;
    grid-template-columns: 90px auto;
    grid-column-rows: repeat(2, auto);
    gap: 6px;
    
    & a {
        color: ${props => props.theme.accent};
        font-weight: bold;
    }

`

export const DropdownInfoLabel = styled.p`
    font-size: 0.75rem;
    color: ${props => props.theme.mid};
    text-transform: uppercase;
    display: flex;
    align-items: center;
`