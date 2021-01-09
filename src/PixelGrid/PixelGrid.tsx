import React, { useContext, useState } from "react";
import ColorContext from "../context/ColorContext";
import { PixelContext } from "../context/PixelContext";
import { StyledPixelGrid } from "./StyledPixelGrid";

const PixelGrid = () => {
  const { pickedColor } = useContext(ColorContext);
  const { pixelTable, rows, columns, pixelSize, setPixel } = useContext(
    PixelContext
  );

  const [isMouseClicked, setMouseClicked] = useState(false);

  const onMouseOverTile = (rowIndex, columnIndex) => {
    if (isMouseClicked && pixelTable[columnIndex][rowIndex] !== pickedColor[0])
      setPixel(pickedColor[0], rowIndex, columnIndex);
  };

  return (
    <StyledPixelGrid.PixelGrid
      rows={rows}
      columns={columns}
      pixelSize={pixelSize}
      onMouseDown={() => setMouseClicked(true)}
      onMouseUp={() => setMouseClicked(false)}
    >
      {pixelTable.map((pixelRow, columnIndex) =>
        pixelRow.map((pixelColor, rowIndex) => (
          <StyledPixelGrid.Pixel
            onClick={() => setPixel(pickedColor[0], rowIndex, columnIndex)}
            onMouseMove={() => onMouseOverTile(rowIndex, columnIndex)}
            pixelSize={pixelSize}
            color={pixelColor}
          />
        ))
      )}
    </StyledPixelGrid.PixelGrid>
  );
};

export default PixelGrid;
