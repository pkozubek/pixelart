import React from "react";
import Header from "../UI/Header/Header";
import { PixelContextProvider } from "../context/PixelContext";
import StyledApp from "./StyledApp";
import ToolBar from "../UI/ToolBar/ToolBar";
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
          <ToolBar />
          <StyledApp.WorkingSpace>
            <PixelGrid />
          </StyledApp.WorkingSpace>
        </StyledApp.App>
      </EditorContextContextProvider>
    </PixelContextProvider>
  );
};

export default App;
