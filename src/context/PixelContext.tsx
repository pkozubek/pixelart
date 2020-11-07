import React, { createContext, useReducer, ReactChildren } from 'react';
import { defaultPixelTable } from '../consts';

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

        }
    }

    const [state, dispatch] = useReducer(pixelReducer, initialState);
    const { pixelTable } = state;

    return <PixelContext.Provider value={{ ...state }}>
        {props.children}
    </PixelContext.Provider>
}



