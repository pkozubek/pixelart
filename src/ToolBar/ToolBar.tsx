import React, { useContext } from "react";
import StyledToolBar from "./StyledToolBar";
import ToolBarButton from "./ToolBarButton/ToolBarButton";
import ColorPalette from "./ColorPalette/ColorPalette";
import { editorMods } from "../consts";
import EditorContext from "../context/EditorContext";

import { FaPaintBrush } from "react-icons/fa";
import { IoMdColorFill } from "react-icons/io";
import { CgColorPicker } from "react-icons/cg";
import ToolBarCategory from "./ToolBarCategory/ToolBarCategory";

const SideBar = () => {
  const { editorMode } = useContext(EditorContext);

  const buttons = [
    {
      icon: <FaPaintBrush />,
      name: "paint",
      editorMode: editorMods.PAINT,
    },
    {
      icon: <IoMdColorFill />,
      name: "fill",
      editorMode: editorMods.FILL,
    },
    {
      icon: <CgColorPicker />,
      name: "Color selector",
      editorMode: editorMods.COLOR_SELECTOR,
    },
  ];

  return (
    <StyledToolBar.ToolBar>
      <ToolBarCategory name="modes">
        {buttons.map((button) => (
          <ToolBarButton
            key={button.name}
            {...button}
            isActive={editorMode === button.editorMode}
          />
        ))}
      </ToolBarCategory>
      <ToolBarCategory name="color">
        <ColorPalette />
      </ToolBarCategory>
    </StyledToolBar.ToolBar>
  );
};

export default SideBar;
