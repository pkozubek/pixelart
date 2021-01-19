import React, { useState } from "react";
import Modal from "../../UI/Modal/Modal";
import StyledNewPixelArt from "./StyledNewPixelArt";

const NewPixelArt = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const visibilityHandler = () => setModalVisible(!isModalVisible);

  return (
    <>
      <StyledNewPixelArt.Button onClick={visibilityHandler}>
        New Pixel Art
      </StyledNewPixelArt.Button>
      <Modal
        visible={isModalVisible}
        title="test"
        content="test"
        visibilityHandler={visibilityHandler}
      />
    </>
  );
};

export default NewPixelArt;
