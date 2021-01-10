import React, { useContext } from "react";
import StyledToolBar from "./StyledToolBar";
import ToolBarButton from "./ToolBarButton/ToolBarButton";
import { MdFormatPaint } from "react-icons/md";
import ColorPalette from "./ColorPalette/ColorPalette";
import { editorMods } from "../../consts";
import EditorContext from "../../context/EditorContext";

const SideBar = () => {
  const { editorMode } = useContext(EditorContext);

  const buttons = [
    {
      icon: <MdFormatPaint />,
      name: "paint",
      editorMode: editorMods.PAINT,
    },
    {
      icon: <MdFormatPaint />,
      name: "fill",
      editorMode: editorMods.FILL,
    },
  ];

  return (
    <StyledToolBar.SideBar>
      <StyledToolBar.ButtonsContainer>
        {buttons.map((button) => (
          <ToolBarButton
            {...button}
            isActive={editorMode === button.editorMode}
          />
        ))}
      </StyledToolBar.ButtonsContainer>
      <ColorPalette />
    </StyledToolBar.SideBar>
  );
};

export default SideBar;
