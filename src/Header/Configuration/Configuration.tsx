import React, { useContext } from "react";
import { PixelContext } from "../../context/PixelContext";
import ConfigurationType from "./ConfigurationType/ConfigurationType";
import { GiResize } from "react-icons/gi";
import { AiOutlineColumnHeight, AiOutlineColumnWidth } from "react-icons/ai";

const Configuration = () => {
  const {
    pixelSize,
    rows,
    columns,
    setPixelSize,
    setPixelColumns,
  } = useContext(PixelContext);

  return (
    <>
      <ConfigurationType
        text="size"
        icon={<GiResize />}
        value={pixelSize}
        onChange={setPixelSize}
      />
      <ConfigurationType
        text="width"
        icon={<AiOutlineColumnWidth />}
        value={rows}
      />
      <ConfigurationType
        text="height"
        icon={<AiOutlineColumnHeight />}
        value={columns}
        onChange={setPixelColumns}
      />
    </>
  );
};

export default Configuration;
