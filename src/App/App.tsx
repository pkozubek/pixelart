import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import { PixelContext } from "../context/PixelContext";
import * as StyledApp from "./StyledApp";
import GlobalStyle from "./GlobalStyle";
import PixelGrid from "../PixelGrid/PixelGrid";
import { loadPixelArray, deletePixelArray } from "../utils/storage";
import Modal from "../UI/Modal/Modal";

const App = () => {
  const { setPixelArtFromStorage } = useContext(PixelContext);
  const [pixelArtFromMemory, setMemoryPixelArt] = useState(false);

  useEffect(() => {
    const savedPixelArt = loadPixelArray();
    if (savedPixelArt) setMemoryPixelArt(savedPixelArt);
  }, []);

  const modalVisiblityHandler = () => setMemoryPixelArt(!!!pixelArtFromMemory);

  const loadPixelArt = () => {
    modalVisiblityHandler();
    setPixelArtFromStorage(pixelArtFromMemory);
  };

  const onDeleteProgress = () => {
    deletePixelArray();
    modalVisiblityHandler();
  };

  return (
    <>
      <GlobalStyle />
      <Modal
        visible={!!pixelArtFromMemory}
        content={
          <>
            <p>Application detected, that you saved progress of your work</p>
            <p>Do you want to Load PixelArt from memory</p>
          </>
        }
        title="Load from memory"
        visibilityHandler={modalVisiblityHandler}
        buttons={[
          {
            name: "Close",
            key: "close",
            action: modalVisiblityHandler,
          },
          {
            name: "Delete progress",
            key: "delete",
            action: onDeleteProgress,
          },
          {
            name: "Load",
            key: "load",
            action: loadPixelArt,
          },
        ]}
      />
      <StyledApp.App>
        <Header />
        <StyledApp.WorkingSpace>
          <PixelGrid />
        </StyledApp.WorkingSpace>
      </StyledApp.App>
    </>
  );
};

export default App;
