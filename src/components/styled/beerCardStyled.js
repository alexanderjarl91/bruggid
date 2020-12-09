import styled from "styled-components";

export const BeerCard = styled.div`
    border-bottom: 1px solid ${props => props.theme.mid};
    padding: 12px 24px;

    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-column-gap: 12px;

    &.collapsed {
        grid-template-rows: 96px 16px;
        grid-template-areas:
            "img info"
            "seemore seemore";
    }

    &.expanded {
        grid-template-rows: 96px auto 16px;
        grid-template-areas:
            "img info"
            "img desc"
            "seemore seemore"
    }
`
export const BeerCardInfo = styled.div`
    grid-area: info;
    display: flex;
    align-items: center;
`

export const BeerCardImgContainer = styled.div`
    grid-area: img;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 200px;
`

export const BeerCardImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`

export const BeerCardDropdown = styled.div`
    grid-area: desc;
    margin-bottom: 12px;
    
    & p {
        margin-top: 6px;
        max-width: 800px
    }

    & span {
        color: ${props => props.theme.accent};
        font-weight: bold;
    }
`

export const BeerCardSeeMore = styled.div`
    grid-area: seemore;
    ${'' /* background: ${props => props.theme.mid}; */}
    width: 100%;
    ${'' /* border-radius: 20px; */}
    display: flex;
    align-items: center;
    justify-content: center;

`