import React, { useContext } from "react";
import EditorContext from "../../../context/EditorContext";
import StyledColorPalette from "./StyledColorPalette";
import { defaultPallet } from "../../../consts";

const ColorPallete = () => {
  const { setPickedColors, pickedColor } = useContext(EditorContext);

  return (
    <StyledColorPalette.ColorContainer>
      {defaultPallet.map((color) => (
        <StyledColorPalette.ColorRectangle
          onClick={() => setPickedColors(color)}
          isPicked={color === pickedColor}
          color={color}
        />
      ))}
    </StyledColorPalette.ColorContainer>
  );
};

export default ColorPallete;
