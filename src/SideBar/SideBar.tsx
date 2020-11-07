import React, { useContext } from 'react';
import { defaultPallet } from "../consts"
import ColorContext from '../context/ColorContext';
import StyledSideBar from './StyledSideBar';

const SideBar = () => {
    const { firstColor, secondColor } = useContext(ColorContext);

    return <StyledSideBar.SideBar>
        <StyledSideBar.ColorContainer>
            {defaultPallet.map(color => <StyledSideBar.ColorRectangle color={color} />)}
        </StyledSideBar.ColorContainer>
        <p>First Color:</p>
        <StyledSideBar.PickedColor color={firstColor} />
        <p> Second Color:</p>
        <StyledSideBar.PickedColor color={secondColor} />
    </StyledSideBar.SideBar >
}

export default SideBar;