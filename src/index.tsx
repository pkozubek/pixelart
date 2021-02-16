import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { EditorContextContextProvider } from "./context/EditorContext";
import { PixelContextProvider } from "./context/PixelContext";

ReactDOM.render(
  <PixelContextProvider>
    <EditorContextContextProvider>
      <App />
    </EditorContextContextProvider>
  </PixelContextProvider>,
  document.querySelector("#root")
);
