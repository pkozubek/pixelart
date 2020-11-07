import React, { useContext } from 'react';
import { PixelContext } from "../context/PixelContext";
import { StyledPixelGrid } from "./StyledPixelGrid";

const PixelGrid = () => {
    const { state } = useContext(PixelContext);

    return <div className='PixelGrid'>
        {state.pixelTable.map(pixel => <StyledPixelGrid.PixelGrid>
            <StyledPixelGrid.Pixel />
        </StyledPixelGrid.PixelGrid>)}
    </div>
}


export default PixelGrid;