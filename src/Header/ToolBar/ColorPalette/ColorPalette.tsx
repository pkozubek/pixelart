import React, { useContext } from "react";
import EditorContext from "../../../context/EditorContext";
import StyledColorPalette from "./StyledColorPalette";

const ColorPallete = () => {
  const { setPickedColors, pickedColor, colorPalette } = useContext(
    EditorContext
  );

  return (
    <StyledColorPalette.ColorContainer>
      {colorPalette.map((color, index) => (
        <StyledColorPalette.ColorRectangle
          key={`${color}-${index}`}
          onClick={() => setPickedColors(color)}
          isPicked={color === pickedColor}
          color={color}
        />
      ))}
    </StyledColorPalette.ColorContainer>
  );
};

export default ColorPallete;
