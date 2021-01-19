import React from "react";
import Header from "../Header/Header";
import { PixelContextProvider } from "../context/PixelContext";
import StyledApp from "./StyledApp";
import GlobalStyle from "./GlobalStyle";
import PixelGrid from "../PixelGrid/PixelGrid";
import { EditorContextContextProvider } from "../context/EditorContext";

const App = () => {
  return (
    <PixelContextProvider>
      <EditorContextContextProvider>
        <GlobalStyle />
        <StyledApp.App>
          <Header />
          <StyledApp.WorkingSpace>
            <PixelGrid />
          </StyledApp.WorkingSpace>
        </StyledApp.App>
      </EditorContextContextProvider>
    </PixelContextProvider>
  );
};

export default App;
