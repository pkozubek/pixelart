import React, { createContext, useState, ReactChildren } from "react";
import colors from "../StyleVariables/colors";
import { editorMods } from "../consts/index";

export const EditorContext = createContext(null);

interface IPixelContextProvider {
  children?: ReactChildren;
}

export const EditorContextContextProvider = (props: IPixelContextProvider) => {
  const [editorMode, changeEditorMode] = useState<editorMods>(editorMods.PAINT);
  const [pickedColor, setPickedColors] = useState<string>(colors.white);

  return (
    <EditorContext.Provider
      value={{ pickedColor, setPickedColors, editorMode, changeEditorMode }}
    >
      {props.children}
    </EditorContext.Provider>
  );
};

export default EditorContext;
