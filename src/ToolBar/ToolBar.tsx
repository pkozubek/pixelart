import React, { useContext, useCallback } from "react";

import { editorMods } from "../consts";
import StyledToolBar from "./StyledToolBar";
import ToolBarButton from "./ToolBarButton/ToolBarButton";
import ColorPalette from "./ColorPalette/ColorPalette";
import EditorContext from "../context/EditorContext";
import ToolBarCategory from "./ToolBarCategory/ToolBarCategory";
import { PixelContext } from "../context/PixelContext";

import {
  FaPaintBrush,
  FaUndo,
  FaRedo,
  FaSave,
  FaFolderOpen,
  FaEraser,
} from "react-icons/fa";
import { IoMdColorFill, IoIosColorPalette } from "react-icons/io";
import { CgColorPicker } from "react-icons/cg";
import { loadPixelArray, savePixelArray } from "../utils/storage";
import ColorPicker from "../UI/ColorPicker/ColorPicker";

const SideBar = () => {
  const { editorMode, changeEditorMode } = useContext(EditorContext);
  const {
    undoLastAction,
    revertLastUndo,
    isRevertPossible,
    isUndoPossible,
    pixelTable,
    setPixelArray,
    resetUndoAndRevert,
  } = useContext(PixelContext);

  const onButtonClick = useCallback(
    (editorMode: editorMods) => changeEditorMode(editorMode),
    []
  );

  const onSaveClick = useCallback(() => {
    savePixelArray(pixelTable);
  }, [pixelTable]);

  const onLoadClick = useCallback(() => {
    const pixelArr = loadPixelArray();
    pixelArr && setPixelArray(pixelArr);
    resetUndoAndRevert();
  }, []);

  const modeButtons = [
    {
      icon: <FaPaintBrush />,
      name: "paint",
      editorMode: editorMods.PAINT,
    },
    {
      icon: <FaEraser />,
      name: "eraser",
      editorMode: editorMods.ERASER,
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

  const pictureStateButtons = [
    {
      icon: <FaSave />,
      name: "Save",
      onClick: onSaveClick,
    },
    {
      icon: <FaFolderOpen />,
      name: "Load",
      onClick: onLoadClick,
    },
    {
      icon: <FaUndo />,
      name: "Undo",
      onClick: undoLastAction,
      disabled: !isUndoPossible,
    },
    {
      icon: <FaRedo />,
      name: "Revert",
      onClick: revertLastUndo,
      disabled: !isRevertPossible,
    },
  ];

  return (
    <StyledToolBar.ToolBar>
      <ToolBarCategory name="Picture">
        {pictureStateButtons.map((stateButton) => (
          <ToolBarButton {...stateButton} key={stateButton.name} />
        ))}
      </ToolBarCategory>
      <ToolBarCategory name="modes">
        {modeButtons.map((modeButton) => (
          <ToolBarButton
            {...modeButton}
            onClick={() => onButtonClick(modeButton.editorMode)}
            key={modeButton.name}
            isActive={editorMode === modeButton.editorMode}
          />
        ))}
      </ToolBarCategory>
      <ToolBarCategory name="color">
        <ColorPalette />
        <ColorPicker />
      </ToolBarCategory>
    </StyledToolBar.ToolBar>
  );
};

export default SideBar;
