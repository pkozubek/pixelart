import React, { useContext, useCallback } from "react";

import { editorMods } from "../../consts";
import ToolBarButton from "./ToolBarButton/ToolBarButton";
import ColorPalette from "./ColorPalette/ColorPalette";
import EditorContext from "../../context/EditorContext";
import Category from "../Category/Category";
import { PixelContext } from "../../context/PixelContext";

import {
  FaPaintBrush,
  FaUndo,
  FaRedo,
  FaSave,
  FaFolderOpen,
  FaEraser,
} from "react-icons/fa";

import { IoMdColorFill } from "react-icons/io";
import { CgColorPicker } from "react-icons/cg";
import { loadPixelArray, savePixelArray } from "../../utils/storage";

import ColorPicker from "../../UI/ColorPicker/ColorPicker";

const SideBar = () => {
  const { editorMode, changeEditorMode } = useContext(EditorContext);
  const {
    undoLastAction,
    revertLastUndo,
    isRevertPossible,
    isUndoPossible,
    pixelArray,
    setPixelArray,
    resetUndoAndRevert,
  } = useContext(PixelContext);

  const onButtonClick = useCallback(
    (editorMode: editorMods) => changeEditorMode(editorMode),
    []
  );

  const onSaveClick = useCallback(() => {
    savePixelArray(pixelArray);
  }, [pixelArray]);

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
    <>
      <Category name="Picture">
        {pictureStateButtons.map((stateButton) => (
          <ToolBarButton {...stateButton} key={stateButton.name} />
        ))}
      </Category>
      <Category name="modes">
        {modeButtons.map((modeButton) => (
          <ToolBarButton
            {...modeButton}
            onClick={() => onButtonClick(modeButton.editorMode)}
            key={modeButton.name}
            isActive={editorMode === modeButton.editorMode}
          />
        ))}
      </Category>
      <Category name="color">
        <ColorPalette />
        <ColorPicker />
      </Category>
    </>
  );
};

export default SideBar;
