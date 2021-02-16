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
  setPixelRows: (rows: number) => void;
  setPixelArtFromStorage: (item) => void;
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
      case PixelActions.RESET_PIXEL_ARRAY:
        return initialState;
      case PixelActions.LOAD_SAVED:
        return action.saved;
      case PixelActions.SET_PIXEL_TABLE:
        return { ...state, pixelArray: action.pixelArray };
      case PixelActions.SET_PIXE_SIZE:
        return { ...state, pixelSize: action.pixelSize };
      case PixelActions.SET_PIXEL_WIDTH:
        const widthPixelArray = morphPixelArray({
          pixelArray: state.pixelArray,
          newWidth: action.rows,
        });

        return {
          ...state,
          pixelArray: widthPixelArray,
          rows: action.rows,
        };
      case PixelActions.SET_PIXEL_HEIGHT:
        const heightPixelArray = morphPixelArray({
          pixelArray: state.pixelArray,
          newHeight: action.columns,
        });

        return {
          ...state,
          pixelArray: heightPixelArray,
          columns: action.columns,
        };
      default:
        return state;
    }
  };

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
      type: PixelActions.SET_PIXEL_HEIGHT,
      columns,
    });
  };

  const setPixelRows = (rows: number) => {
    dispatch({
      type: PixelActions.SET_PIXEL_WIDTH,
      rows,
    });
  };

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

  const setPixelArtFromStorage = (item) => {
    dispatch({
      type: PixelActions.LOAD_SAVED,
      saved: item,
    });
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
        setPixelRows,
        setPixelArtFromStorage,
      }}
    >
      {children}
    </PixelContext.Provider>
  );
};
