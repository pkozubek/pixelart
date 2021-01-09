import React from "react";
import Header from "../UI/Header/Header";
import { PixelContextProvider } from "../context/PixelContext";
import StyledApp from "./StyledApp";
import ToolBar from "../UI/ToolBar/ToolBar";
import GlobalStyle from "./GlobalStyle";
import PixelGrid from "../PixelGrid/PixelGrid";
import { ColorContextProvider } from "../context/ColorContext";

const App = () => {
  return (
    <PixelContextProvider>
      <ColorContextProvider>
        <GlobalStyle />
        <StyledApp.App>
          <Header />
          <ToolBar />
          <StyledApp.WorkingSpace>
            <PixelGrid />
          </StyledApp.WorkingSpace>
        </StyledApp.App>
      </ColorContextProvider>
    </PixelContextProvider>
  );
};

export default App;
