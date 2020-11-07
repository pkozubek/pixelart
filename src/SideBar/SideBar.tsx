import React, { useState } from 'react';
import { defaultPallet } from "../consts"
import StyledSideBar from './StyledSideBar';

const SideBar = () => {
    return <StyledSideBar.SideBar>
        <StyledSideBar.ColorContainer>
            {defaultPallet.map(color => <StyledSideBar.ColorRectangle color={color} />)}
        </StyledSideBar.ColorContainer>
        <p>First Color:</p>
        <p>Second Color:</p>
    </StyledSideBar.SideBar>
}

export default SideBar;