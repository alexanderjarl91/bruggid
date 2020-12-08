import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Checkbox } from "../img/checkbox.svg";
import LocalStorageButton from "./LocalStorageButton";
import { mid } from "./styled/theme/orange";

const StyledCheckbox= styled(Checkbox)`
    z-index: 2;
    rect {
        fill: transparent;
    }
    &.stored rect {
        fill: ${mid};
    }
`;

const TriedBeerButton = ({beer}) => <LocalStorageButton beer={beer} Icon={StyledCheckbox} storageKey="triedBeers" />;

export default TriedBeerButton;