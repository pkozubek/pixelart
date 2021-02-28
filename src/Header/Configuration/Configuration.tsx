import React, { useContext } from "react";
import { PixelContext } from "../../context/PixelContext";
import ConfigurationType from "./ConfigurationType/ConfigurationType";
import { GiResize } from "react-icons/gi";
import { AiOutlineColumnHeight, AiOutlineColumnWidth } from "react-icons/ai";
import Category from "../Category/Category";
import DisplayOption from "./DisplayOption/DisplayOption";
import EditorContext from "../../context/EditorContext";

const Configuration = () => {
  const {
    pixelSize,
    rows,
    columns,
    setPixelSize,
    setPixelColumns,
    setPixelRows,
  } = useContext(PixelContext);
  const {
    toggleFullScreen,
    toggleLines,
    isFullScreen,
    areLinesVisible,
  } = useContext(EditorContext);

  return (
    <>
      <Category name="Size definition">
        <ConfigurationType
          text="size"
          icon={<GiResize />}
          value={pixelSize}
          onChange={setPixelSize}
        />
        <ConfigurationType
          key="width"
          text="width"
          icon={<AiOutlineColumnWidth />}
          value={rows}
          onChange={setPixelRows}
        />
        <ConfigurationType
          key="height"
          text="height"
          icon={<AiOutlineColumnHeight />}
          value={columns}
          onChange={setPixelColumns}
        />
      </Category>
      <Category name="Display options">
        <DisplayOption
          onCheck={toggleLines}
          isActive={areLinesVisible}
          label="Show lines"
        />
        <DisplayOption
          onCheck={toggleFullScreen}
          isActive={isFullScreen}
          label="Full screen"
        />
      </Category>
    </>
  );
};

export default Configuration;
