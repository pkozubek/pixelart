import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { IoIosColorPalette } from "react-icons/io";
import ToolBarButton from "../../ToolBar/ToolBarButton/ToolBarButton";
import StyledColorPicker from "./StyledColorPicker";

const ColorPicker = () => {
  const [isColorPickerVisible, setColorPickerVisile] = useState(false);

  return (
    <>
      <ToolBarButton
        icon={<IoIosColorPalette />}
        name="Color Pallete"
        onClick={() => setColorPickerVisile(!isColorPickerVisible)}
      />
      {isColorPickerVisible && (
        <StyledColorPicker.Popover>
          <StyledColorPicker.Cover>
            <ChromePicker />
          </StyledColorPicker.Cover>
        </StyledColorPicker.Popover>
      )}
    </>
  );
};

export default ColorPicker;
