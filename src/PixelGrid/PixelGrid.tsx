import React, { useContext } from 'react';
import ColorContext from '../context/ColorContext';
import { PixelContext } from "../context/PixelContext";
import { StyledPixelGrid } from "./StyledPixelGrid";

const PixelGrid = () => {
    const { pickedColor } = useContext(ColorContext);
    const { pixelTable, rows, columns, pixelSize, setPixel } = useContext(PixelContext);

    return <StyledPixelGrid.PixelGrid rows={rows} columns={columns} pixelSize={pixelSize}>
        {pixelTable.map((pixelRow, columnIndex) =>
            pixelRow.map((pixelColor, rowIndex) =>
                <StyledPixelGrid.Pixel
                    onClick={() => setPixel(pickedColor[0], rowIndex, columnIndex)}
                    onContextMenu={() => setPixel(pickedColor[1], rowIndex, columnIndex)}
                    pixelSize={pixelSize}
                    color={pixelColor} />))}
    </StyledPixelGrid.PixelGrid>
}


export default PixelGrid;