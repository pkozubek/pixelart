import React, { createContext, useReducer, ReactChildren } from 'react';
import { defaultPixelTable } from '../consts';
import { PixelActions } from './Actions';

export const PixelContext = createContext(null);

const initialState = {
    pixelTable: defaultPixelTable,
    rows: 3,
    columns: 3,
    pixelSize: 80
}

interface IPixelContextProvider {
    children?: ReactChildren;
}

export const PixelContextProvider = (props: IPixelContextProvider) => {
    const pixelReducer = (state, action) => {
        switch (action.type) {
            case PixelActions.SET_PIXEL_TABLE:
                return { ...state, pixelTable: action.pixelTable }
        }
    }

    const [state, dispatch] = useReducer(pixelReducer, initialState);

    const setPixel = (color: string, row: number, column: number) => {
        const newPixelTable = [...state.pixelTable];
        const newRow = [...newPixelTable[column]];
        newRow[row] = color;
        newPixelTable[column] = newRow;

        dispatch({
            type: PixelActions.SET_PIXEL_TABLE,
            pixelTable: newPixelTable
        })
    }

    return <PixelContext.Provider value={{ ...state, setPixel }}>
        {props.children}
    </PixelContext.Provider>
}



