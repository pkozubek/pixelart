import React, { createContext, useState, ReactChildren } from "react";
import { editorMods, baseColor } from "../consts/index";

const numberOfColorsInPallette = 29;

interface IEditorContextProviderProps {
  children: JSX.Element;
}

interface IEditorContext {
  colorPalette: string[];
  replaceColor: (index: number, color: string) => void;
  pickedColor: string;
  editorMode: editorMods;
  changeEditorMode: (mode: editorMods) => void;
  indexOfSelectedColor: number;
  changeIndexOfSelectedColor: (index: number) => void;
}

export const EditorContext = createContext<IEditorContext>(null);

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const EditorContextContextProvider = (
  props: IEditorContextProviderProps
) => {
  const generatedColorArray = [...Array(numberOfColorsInPallette)].map((i) =>
    generateRandomColor()
  );

  const [editorMode, changeEditorMode] = useState<editorMods>(editorMods.PAINT);
  const [colorPalette, setColorPalette] = useState<string[]>([
    baseColor,
    ...generatedColorArray,
  ]);
  const [indexOfSelectedColor, changeIndexOfSelectedColor] = useState(0);

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
        pickedColor: colorPalette[indexOfSelectedColor],
        editorMode,
        changeEditorMode,
        indexOfSelectedColor,
        changeIndexOfSelectedColor,
      }}
    >
      {props.children}
    </EditorContext.Provider>
  );
};

export default EditorContext;
