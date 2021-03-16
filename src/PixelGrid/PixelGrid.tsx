import React, { useContext, useState } from "react";
import { baseColor, editorMods } from "../consts";
import EditorContext from "../context/EditorContext";
import { PixelContext } from "../context/PixelContext";
import { StyledPixelGrid } from "./StyledPixelGrid";

const PixelGrid = () => {
  const {
    pickedColor,
    editorMode,
    indexOfSelectedColor,
    replaceColor,
    areLinesVisible,
  } = useContext(EditorContext);
  const {
    pixelArray,
    rows,
    columns,
    pixelSize,
    setPixel,
    fillWithColor,
  } = useContext(PixelContext);

  const [isMouseClicked, setMouseClicked] = useState(false);

  const onMouseOverTile = (rowIndex: number, columnIndex: number) => {
    if (
      (editorMode === editorMods.PAINT || editorMode === editorMods.ERASER) &&
      isMouseClicked
    ) {
      let targetColor = pickedColor;
      if (editorMode === editorMods.ERASER) targetColor = baseColor;

      if (pixelArray[rowIndex][columnIndex] !== targetColor)
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
      case editorMods.COLOR_SELECTOR:
        replaceColor(indexOfSelectedColor, pixelArray[rowIndex][columnIndex]);
        break;
      case editorMods.FILL:
        fillWithColor(rowIndex, columnIndex, pickedColor);
        break;
    }
  };

  return (
    <StyledPixelGrid.PixelGrid
      className="PixelGrid"
      rows={rows}
      columns={columns}
      pixelSize={pixelSize}
      onMouseDown={() => setMouseClicked(true)}
      onMouseUp={() => setMouseClicked(false)}
    >
      {pixelArray.map((rowColumn, rowIndex) =>
        rowColumn.map((pixelColor, columnIndex) => (
          <StyledPixelGrid.Pixel
            isBorder={areLinesVisible}
            key={`pixel-${rowIndex}-${columnIndex}`}
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
