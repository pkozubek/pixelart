import React, { createContext, useReducer, useState, useCallback } from "react";
import { defaultPixelArray } from "../consts";
import { PixelActions } from "./Actions";
import { morphPixelArray } from "../utils/pixelArray";
interface IPixelState {
  pixelArray: string[][];
  rows: number;
  columns: number;
  pixelSize: number;
}

interface IPixelContext extends IPixelState {
  setPixel: (color: string, row: number, column: number) => void;
  setPixelArray: (arr: string[][]) => void;
  resetPixelArray: () => void;
  undoLastAction: () => void;
  revertLastUndo: () => void;
  resetUndoAndRevert: () => void;
  isRevertPossible: Boolean;
  isUndoPossible: Boolean;
  setPixelSize: (size: number) => void;
  setPixelColumns: (columns: number) => void;
}

export const PixelContext = createContext<IPixelContext>(null);

const initialState: IPixelState = {
  pixelArray: defaultPixelArray,
  rows: 3,
  columns: 3,
  pixelSize: 80,
};

interface IPixelContextProviderProps {
  children: JSX.Element;
}

export const PixelContextProvider = ({
  children,
}: IPixelContextProviderProps) => {
  const pixelReducer = (state: IPixelState, action) => {
    switch (action.type) {
      case PixelActions.SET_PIXEL_TABLE:
        return { ...state, pixelArray: action.pixelArray };
      case PixelActions.SET_PIXE_SIZE:
        return { ...state, pixelSize: action.pixelSize };
      case PixelActions.SET_PIXEL_HEIGHT:
        const pixelArray = morphPixelArray({
          pixelArray: state.pixelArray,
          newHeight: action.columns,
        });

        return {
          ...state,
          pixelArray,
          columns: action.columns,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(pixelReducer, initialState);
  const [previousPixelArray, setPreviousPixelArray] = useState([]);
  const [revertedPixelArray, setRevertedPixelArray] = useState([]);

  const setPixelArray = (arr: string[][]) => {
    dispatch({
      type: PixelActions.SET_PIXEL_TABLE,
      pixelArray: arr,
    });
  };

  const resetPixelArray = useCallback(
    () => setPixelArray(defaultPixelArray),
    []
  );

  const setPixelSize = useCallback(
    (size: number) => {
      dispatch({
        type: PixelActions.SET_PIXE_SIZE,
        pixelSize: size,
      });
    },
    [dispatch]
  );

  const setPixelColumns = useCallback((columns: number) => {
    dispatch({
      type: PixelActions.SET_PIXEL_HEIGHT,
      columns,
    });
  }, []);

  const setPixel = (color: string, row: number, column: number) => {
    const newPixelArray = [...state.pixelArray];
    setPreviousPixelArray([...previousPixelArray, state.pixelArray]);
    setRevertedPixelArray([]);

    const newRow = [...newPixelArray[column]];
    newRow[row] = color;
    newPixelArray[column] = newRow;

    dispatch({
      type: PixelActions.SET_PIXEL_TABLE,
      pixelArray: newPixelArray,
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

  const resetUndoAndRevert = useCallback(() => {
    setRevertedPixelArray([]);
    setPreviousPixelArray([]);
  }, []);

  const undoLastAction = () => {
    const result = removeLastArrayElementAndReturn(previousPixelArray);
    if (result) {
      dispatch({
        type: PixelActions.SET_PIXEL_TABLE,
        pixelArray: result.lastElement,
      });

      setRevertedPixelArray([...revertedPixelArray, state.pixelArray]);
      setPreviousPixelArray(result.newArray);
    }
  };

  const revertLastUndo = () => {
    const result = removeLastArrayElementAndReturn(revertedPixelArray);
    if (result) {
      dispatch({
        type: PixelActions.SET_PIXEL_TABLE,
        pixelArray: result.lastElement,
      });

      setRevertedPixelArray(result.newArray);
      setPreviousPixelArray([...previousPixelArray, state.pixelArray]);
    }
  };

  return (
    <PixelContext.Provider
      value={{
        ...state,
        setPixel,
        setPixelArray,
        isRevertPossible: revertedPixelArray.length > 0,
        isUndoPossible: previousPixelArray?.length > 0,
        undoLastAction,
        revertLastUndo,
        resetUndoAndRevert,
        resetPixelArray,
        setPixelSize,
        setPixelColumns,
      }}
    >
      {children}
    </PixelContext.Provider>
  );
};
