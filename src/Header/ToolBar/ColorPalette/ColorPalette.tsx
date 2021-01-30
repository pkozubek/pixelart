import React, { useContext } from "react";
import EditorContext from "../../../context/EditorContext";
import StyledColorPalette from "./StyledColorPalette";

const ColorPallete = () => {
  const { pickedColor, colorPalette, changeIndexOfSelectedColor } = useContext(
    EditorContext
  );

  return (
    <StyledColorPalette.ColorContainer>
      {colorPalette.map((color, index) => (
        <StyledColorPalette.ColorRectangle
          key={`${color}-${index}`}
          onClick={() => changeIndexOfSelectedColor(index)}
          isPicked={color === pickedColor}
          color={color}
        />
      ))}
    </StyledColorPalette.ColorContainer>
  );
};

export default ColorPallete;
