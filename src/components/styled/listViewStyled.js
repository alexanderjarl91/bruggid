import styled from "styled-components";

//Listview container
export const ListView = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: repeat(2, auto);
    overflow: hidden;

    @media (min-width: 1024px) {
        padding-left: 120px;
        grid-template-rows: 1;
        grid-template-columns: 2fr 1fr;
        grid-gap: 24px;
    }
`

// See searchBarStyled.js for search/sort filter portion of list view

// List component
export const ListComponent = styled.div`
    background: ${props => props.theme.light};
    border-radius: 20px 20px 0 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-bottom: 88px;
    filter: drop-shadow(0px -2px 6px rgba(42, 42, 42, 0.4));

    @media (min-width: 1024px) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        max-height: 90vh;
        align-self: end;
    }

    @media (max-height: 700px) {
    padding-bottom: 64px;
  }
`

// List component header stuff
export const ListInfo = styled.div`
    margin: 18px 24px 4px 24px;
`

export const ListTitle = styled.h2`
    font-weight: bold; 
    font-size: 1.8rem;

    @media (max-width: 1024px) {
        ${prop => {
        if (prop.brewerypage) {
            return "display: none;"
        }
    }}
    }
`

export const ListHeaders = styled.div`
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: ${props => props.theme.mid};
    text-transform: uppercase;

    margin-left: 96px;
`

// Container for the list render
export const ListContainer = styled.div`
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border-top: 1px solid #cdcdcd;
    color: ${props => props.theme.dark};
`

// Card
export const ListCard = styled.div`
    border-bottom: 1px solid #cdcdcd;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.dark};

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