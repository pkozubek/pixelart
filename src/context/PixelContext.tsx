import React, {
  createContext,
  useReducer,
  ReactChildren,
  useState,
  useCallback,
} from "react";
import { defaultPixelTable } from "../consts";
import { PixelActions } from "./Actions";

export const PixelContext = createContext(null);

const initialState = {
  pixelTable: defaultPixelTable,
  rows: 3,
  columns: 3,
  pixelSize: 80,
};

interface IPixelContextProvider {
  children?: ReactChildren;
}

export const PixelContextProvider = (props: IPixelContextProvider) => {
  const pixelReducer = (state, action) => {
    switch (action.type) {
      case PixelActions.SET_PIXEL_TABLE:
        return { ...state, pixelTable: action.pixelTable };
    }
  };

  const [state, dispatch] = useReducer(pixelReducer, initialState);
  const [previousPixelArray, setPreviousPixelArray] = useState([]);
  const [revertedPixelArray, setRevertedPixelArray] = useState([]);

  const setPixelArray = (arr) => {
    dispatch({
      type: PixelActions.SET_PIXEL_TABLE,
      pixelTable: arr,
    });
  };

  const resetPixelArray = () => setPixelArray(defaultPixelTable);

  const setPixel = (color: string, row: number, column: number) => {
    const newPixelTable = [...state.pixelTable];
    setPreviousPixelArray([...previousPixelArray, state.pixelTable]);
    setRevertedPixelArray([]);

    const newRow = [...newPixelTable[column]];
    newRow[row] = color;
    newPixelTable[column] = newRow;

    dispatch({
      type: PixelActions.SET_PIXEL_TABLE,
      pixelTable: newPixelTable,
    });
  };

  const removeLastArrayElementAndReturn = useCallback((arr: any[] = []) => {
    if (arr && arr.length > 0) {
      const newArray = [...arr];
      const lastElement = newArray.pop();

      return {
        lastElement,
        newArray,
      };
    } else return null;
  }, []);

  const resetUndoAndRevert = () => {
    setRevertedPixelArray([]);
    setPreviousPixelArray([]);
  };

  const undoLastAction = () => {
    const result = removeLastArrayElementAndReturn(previousPixelArray);
    if (result) {
      dispatch({
        type: PixelActions.SET_PIXEL_TABLE,
        pixelTable: result.lastElement,
      });

      setRevertedPixelArray([...revertedPixelArray, state.pixelTable]);
      setPreviousPixelArray(result.newArray);
    }
  };

  const revertLastUndo = () => {
    const result = removeLastArrayElementAndReturn(revertedPixelArray);
    if (result) {
      dispatch({
        type: PixelActions.SET_PIXEL_TABLE,
        pixelTable: result.lastElement,
      });

      setRevertedPixelArray(result.newArray);
      setPreviousPixelArray([...previousPixelArray, state.pixelTable]);
    }
  };

  const isUndoPossible = previousPixelArray.length > 0;
  const isRevertPossible = revertedPixelArray.length > 0;

  return (
    <PixelContext.Provider
      value={{
        ...state,
        setPixel,
        setPixelArray,
        isRevertPossible,
        isUndoPossible,
        undoLastAction,
        revertLastUndo,
        resetUndoAndRevert,
        resetPixelArray,
      }}
    >
      {props.children}
    </PixelContext.Provider>
  );
};
