import React, { createContext, useReducer, useState, useCallback } from "react";
import { baseHeight, baseWidth, defaultPixelArray } from "../consts";
import { PixelActions } from "./Actions";
import {
  fillPixelArrayWithColor,
  morphPixelArrayWidth,
  morphPixelArrayHeight,
} from "../utils/pixelArray";

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
  setPixelRows: (rows: number) => void;
  setPixelArtFromStorage: (item) => void;
  fillWithColor: (
    rowIndex: number,
    columnIndex: number,
    newColor: string
  ) => void;
}

const initialState: IPixelState = {
  pixelArray: defaultPixelArray,
  rows: baseHeight,
  columns: baseWidth,
  pixelSize: 40,
};

export const PixelContext = createContext<IPixelContext>(null);

interface IPixelContextProviderProps {
  children: JSX.Element;
}

const pixelReducer = (state: IPixelState, action) => {
  switch (action.type) {
    case PixelActions.RESET_PIXEL_ARRAY:
      return initialState;
    case PixelActions.LOAD_SAVED:
      return action.saved;
    case PixelActions.SET_PIXEL_TABLE:
      return { ...state, pixelArray: action.pixelArray };
    case PixelActions.SET_PIXE_SIZE:
      return { ...state, pixelSize: action.pixelSize };
    case PixelActions.SET_PIXEL_WIDTH:
      const widthPixelArray = morphPixelArrayWidth(
        state.pixelArray,
        action.columns
      );

      return {
        ...state,
        pixelArray: widthPixelArray,
        columns: action.columns,
      };
    case PixelActions.SET_PIXEL_HEIGHT:
      const heightPixelArray = morphPixelArrayHeight(
        state.pixelArray,
        action.rows
      );

      return {
        ...state,
        pixelArray: heightPixelArray,
        rows: action.rows,
      };
    default:
      return state;
  }
};

export const PixelContextProvider = ({
  children,
}: IPixelContextProviderProps) => {
  const [state, dispatch] = useReducer(pixelReducer, initialState);
  const [previousPixelArray, setPreviousPixelArray] = useState([]);
  const [revertedPixelArray, setRevertedPixelArray] = useState([]);

  const setPixelArray = useCallback(
    (arr: string[][]) => {
      dispatch({
        type: PixelActions.SET_PIXEL_TABLE,
        pixelArray: arr,
      });
    },
    [dispatch]
  );

  const resetPixelArray = useCallback(() => {
    dispatch({
      type: PixelActions.RESET_PIXEL_ARRAY,
    });
  }, [dispatch]);

  const setPixelSize = useCallback(
    (size: number) => {
      dispatch({
        type: PixelActions.SET_PIXE_SIZE,
        pixelSize: size,
      });
    },
    [dispatch]
  );

  const setPixelColumns = (columns: number) => {
    dispatch({
      type: PixelActions.SET_PIXEL_WIDTH,
      columns,
    });
  };

  const setPixelRows = (rows: number) => {
    dispatch({
      type: PixelActions.SET_PIXEL_HEIGHT,
      rows,
    });
  };

  const setPixel = (color: string, row: number, column: number) => {
    const newPixelArray = [...state.pixelArray];
    setPreviousPixelArray([...previousPixelArray, state.pixelArray]);
    setRevertedPixelArray([]);

    const newRow = [...newPixelArray[row]];
    newRow[column] = color;
    newPixelArray[row] = newRow;

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

  const fillWithColor = (
    rowIndex: number,
    columnIndex: number,
    newColor: string
  ) => {
    const newPixelArray = fillPixelArrayWithColor(
      state.pixelArray,
      newColor,
      rowIndex,
      columnIndex
    );

    setPixelArray(newPixelArray);
  };

  const setPixelArtFromStorage = useCallback(
    (item) => {
      dispatch({
        type: PixelActions.LOAD_SAVED,
        saved: item,
      });
    },
    [dispatch]
  );

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
        setPixelRows,
        setPixelArtFromStorage,
        fillWithColor,
      }}
    >
      {children}
    </PixelContext.Provider>
  );
};
