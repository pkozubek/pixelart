import React, { useContext } from "react";
import { defaultPallet } from "../../consts";
import ColorContext from "../../context/ColorContext";
import StyledToolBar from "./StyledToolBar";
import ToolBarButton from "./ToolBarButton/ToolBarButton";
import { MdFormatPaint } from "react-icons/md";
import StyledToolBarButton from "./ToolBarButton/StyledToolBarButton";

const SideBar = () => {
  const { pickedColor, setPickedColors } = useContext(ColorContext);

  const onColorLeftClick = (newColor: string) =>
    setPickedColors([newColor, pickedColor[1]]);

  const onColorRightClick = (newColor: string) =>
    setPickedColors([pickedColor[0], newColor]);

  const buttons = [
    {
      icon: <MdFormatPaint />,
      name: "test",
    },
    {
      icon: <MdFormatPaint />,
      name: "test2",
    },
  ];

  return (
    <StyledToolBar.SideBar>
      <StyledToolBar.ButtonsContainer>
        {buttons.map((button) => (
          <ToolBarButton {...button} />
        ))}
      </StyledToolBar.ButtonsContainer>
      <StyledToolBar.ColorContainer>
        {defaultPallet.map((color) => (
          <StyledToolBar.ColorRectangle
            onClick={() => onColorLeftClick(color)}
            onContextMenu={() => onColorRightClick(color)}
            color={color}
          />
        ))}
      </StyledToolBar.ColorContainer>
    </StyledToolBar.SideBar>
  );
};

export default SideBar;
