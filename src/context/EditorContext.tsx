import React, { createContext, useState, ReactChildren } from "react";
import { editorMods, baseColor } from "../consts/index";

const numberOfColorsInPallette = 29;
export const EditorContext = createContext(null);

interface IPixelContextProvider {
  children?: ReactChildren;
}

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const EditorContextContextProvider = (props: IPixelContextProvider) => {
  const generatedColorArray = [...Array(numberOfColorsInPallette)].map((i) =>
    generateRandomColor()
  );

  const [editorMode, changeEditorMode] = useState<editorMods>(editorMods.PAINT);
  const [colorPalette, setColorPalette] = useState<string[]>([
    baseColor,
    ...generatedColorArray,
  ]);

  const [pickedColor, setPickedColors] = useState<string>(baseColor);

  const replaceColor = (index: number, color: string) => {
    const newColorPallete = [...colorPalette];
    newColorPallete[index] = color;
    setColorPalette(newColorPallete);
  };

  return (
    <EditorContext.Provider
      value={{
        colorPalette,
        replaceColor,
        pickedColor,
        setPickedColors,
        editorMode,
        changeEditorMode,
      }}
    >
      {props.children}
    </EditorContext.Provider>
  );
};

export default EditorContext;
