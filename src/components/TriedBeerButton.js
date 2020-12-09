import styled from "styled-components";
import { ReactComponent as Checkbox } from "../img/checkbox.svg";
import LocalStorageButton from "./LocalStorageButton";
import { dark, mid } from "./styled/theme/orange";

const StyledCheckbox= styled(Checkbox)`
    z-index: 2;
    
    rect,
    path {
        fill: transparent;
    }
    
    &.stored {
        rect {
            fill: ${mid};
        }

        path {
            fill: ${dark};
        }
    }
`;

const TriedBeerButton = ({beer}) => <LocalStorageButton beer={beer} Icon={StyledCheckbox} storageKey="triedBeers" />;

export default TriedBeerButton;