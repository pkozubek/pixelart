import React, { useContext } from 'react';
import { defaultPallet } from "../../consts"
import ColorContext from '../../context/ColorContext';
import StyledSideBar from './StyledSideBar';

const SideBar = () => {
    const { pickedColor, setPickedColors } = useContext(ColorContext);

    const onColorLeftClick = (newColor: string) => setPickedColors([newColor, pickedColor[1]]);
    const onColorRightClick = (newColor: string) => setPickedColors([pickedColor[0], newColor]);

    return <StyledSideBar.SideBar>
        <StyledSideBar.ColorContainer>
            {defaultPallet.map(color => <StyledSideBar.ColorRectangle
                onClick={() => onColorLeftClick(color)}
                onContextMenu={() => onColorRightClick(color)} color={color} />)}
        </StyledSideBar.ColorContainer>
        <p>First Color:</p>
        <StyledSideBar.PickedColor color={pickedColor[0]} />
        <p> Second Color:</p>
        <StyledSideBar.PickedColor color={pickedColor[1]} />
    </StyledSideBar.SideBar >
}

export default SideBar;