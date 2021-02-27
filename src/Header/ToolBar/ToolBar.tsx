import React, { useContext, useCallback, useState } from "react";

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
  FaFileImage,
} from "react-icons/fa";

import { IoMdColorFill } from "react-icons/io";
import { CgColorPicker } from "react-icons/cg";
import { loadPixelArray, savePixelArray } from "../../utils/storage";

import ColorPicker from "../../UI/ColorPicker/ColorPicker";
import { useModal } from "../../hooks/useModal";
import Modal from "../../UI/Modal/Modal";
import { toPng } from "html-to-image";
import download from "downloadjs";
import * as StyledToolBar from "./styledToolBar";

const SideBar = () => {
  const { isModalVisible, visibilityHandler } = useModal({
    initialVisibility: false,
  });
  const [nameOfFile, setNameOfFile] = useState("");
  const [onExportError, setOnExportError] = useState(false);

  const { editorMode, changeEditorMode } = useContext(EditorContext);
  const {
    undoLastAction,
    revertLastUndo,
    isRevertPossible,
    isUndoPossible,
    pixelArray,
    resetUndoAndRevert,
    columns,
    rows,
    pixelSize,
    setPixelArtFromStorage,
  } = useContext(PixelContext);

  const onButtonClick = useCallback(
    (editorMode: editorMods) => changeEditorMode(editorMode),
    []
  );

  const exportImage = () => {
    if (!nameOfFile) {
      setOnExportError(true);
      return;
    }

    setOnExportError(false);
    const [pixelGrid] = document.getElementsByClassName("PixelGrid");
    visibilityHandler();
    toPng(pixelGrid as HTMLElement).then((dataUrl) =>
      download(dataUrl, `${nameOfFile}.png`)
    );
  };

  const onSaveClick = useCallback(() => {
    savePixelArray({
      pixelArray,
      columns,
      rows,
      pixelSize,
    });
  }, [pixelArray]);

  const onLoadClick = useCallback(() => {
    const pixelArr = loadPixelArray();
    pixelArr && setPixelArtFromStorage(pixelArr);
    resetUndoAndRevert();
  }, []);

  const onInputChange = (e) => {
    setOnExportError(false);
    setNameOfFile(e.target.value);
  };

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
      icon: <FaFileImage />,
      name: "Export to Image",
      onClick: visibilityHandler,
    },
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
      <Modal
        visible={isModalVisible}
        content={
          <>
            <StyledToolBar.Label isError={onExportError}>
              Name of your file:
            </StyledToolBar.Label>
            <StyledToolBar.Input
              isError={onExportError}
              placeholder="Type here..."
              value={nameOfFile}
              onChange={onInputChange}
            />
          </>
        }
        title="Export To Image"
        visibilityHandler={visibilityHandler}
        buttons={[
          {
            name: "Cancel",
            key: "cancel",
            action: visibilityHandler,
          },
          {
            name: "Save",
            key: "save",
            action: exportImage,
          },
        ]}
      />
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
