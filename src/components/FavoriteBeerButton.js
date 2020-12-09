import styled from "styled-components";
import { ReactComponent as Heart } from "../img/favoriteHeart.svg";
import LocalStorageButton from "./LocalStorageButton";
import { accent } from "./styled/theme/orange";

const StyledHeart= styled(Heart)`
    fill: transparent;
    z-index: 2;
    &.stored {
        fill: ${accent};
    }
`;

const FavoriteBeerButton = ({beer}) => <LocalStorageButton beer={beer} Icon={StyledHeart} storageKey="favoriteBeers" />;

export default FavoriteBeerButton;