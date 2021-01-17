import React, { useContext, useState } from "react";
import { baseColor, editorMods } from "../consts";
import EditorContext from "../context/EditorContext";
import { PixelContext } from "../context/PixelContext";
import { StyledPixelGrid } from "./StyledPixelGrid";

const PixelGrid = () => {
  const { pickedColor, editorMode } = useContext(EditorContext);
  const { pixelTable, rows, columns, pixelSize, setPixel } = useContext(
    PixelContext
  );

  const [isMouseClicked, setMouseClicked] = useState(false);

  const onMouseOverTile = (rowIndex: number, columnIndex: number) => {
    if (
      (editorMode === editorMods.PAINT || editorMode === editorMods.ERASER) &&
      isMouseClicked
    ) {
      let targetColor = pickedColor;
      if (editorMode === editorMods.ERASER) targetColor = baseColor;

      if (pixelTable[columnIndex][rowIndex] !== targetColor)
        setPixel(targetColor, rowIndex, columnIndex);
    }
  };

  const onPixelTileClick = (rowIndex: number, columnIndex: number) => {
    switch (editorMode) {
      case editorMods.PAINT:
        setPixel(pickedColor, rowIndex, columnIndex);
        break;
      case editorMods.ERASER:
        setPixel(baseColor, rowIndex, columnIndex);
        break;
    }
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
            key={`pixel-${columnIndex}-${rowIndex}`}
            onClick={() => onPixelTileClick(rowIndex, columnIndex)}
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
