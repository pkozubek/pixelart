import React, { useContext } from 'react';
import { PixelContext } from "../context/PixelContext";
import { StyledPixelGrid } from "./StyledPixelGrid";

const PixelGrid = () => {
    const { pixelTable, rows, columns, pixelSize } = useContext(PixelContext);

    return <StyledPixelGrid.PixelGrid rows={rows} columns={columns} pixelSize={pixelSize}>
        {pixelTable.map(pixelRow => pixelRow.map(pixelColor => <StyledPixelGrid.Pixel pixelSize={pixelSize} color={pixelColor} />))}
    </StyledPixelGrid.PixelGrid>
}


export default PixelGrid;