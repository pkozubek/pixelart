import React, { useContext } from "react";
import { PixelContext } from "../../context/PixelContext";
import { useModal } from "../../hooks/useModal";
import Modal from "../../UI/Modal/Modal";
import StyledNewPixelArt from "./StyledNewPixelArt";

const NewPixelArt = () => {
  const { resetPixelArray } = useContext(PixelContext);
  const { isModalVisible, visibilityHandler, confirmationHandler } = useModal({
    onConfirmation: resetPixelArray,
  });
  const buttons = [
    {
      name: "Cancel",
      key: "cancel",
      action: visibilityHandler,
    },
    {
      name: "Confirm",
      key: "confirm",
      action: confirmationHandler,
    },
  ];
  return (
    <>
      <StyledNewPixelArt.Button onClick={visibilityHandler}>
        <StyledNewPixelArt.Icon />
        New Pixel Art
      </StyledNewPixelArt.Button>
      <Modal
        buttons={buttons}
        visible={isModalVisible}
        title="New Pixelart"
        content="Are you want to discard your changes, and create new PixelArt?"
        visibilityHandler={visibilityHandler}
      />
    </>
  );
};

export default NewPixelArt;
