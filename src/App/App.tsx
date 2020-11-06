import React, { useReducer } from 'react';
import { defaultPixelTable } from '../consts';
import Header from "../Header/Header";
import PixelGrid from "../PixelGrid/PixelGrid";
import { PixelReducer, PixelContext } from "../context/PixelContext";
import AppStyledComponents from "./AppStyledComponents";

const initialState = {
    pixelTable: defaultPixelTable
}

const App = () => {
    const [state, dispatch] = useReducer(PixelReducer, initialState)

    return <PixelContext.Provider value={{ state, dispatch }}>
        <AppStyledComponents.App>
            <AppStyledComponents.GlobalStyle />
            <Header />
            <PixelGrid />
        </AppStyledComponents.App>
    </PixelContext.Provider>
}

export default App;