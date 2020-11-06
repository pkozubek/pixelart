import React, { useReducer } from 'react';
import { defaultPixelTable } from '../consts';
import Header from "../Header/Header";
import PixelGrid from "../PixelGrid/PixelGrid";
import { PixelReducer, PixelContext } from "../context/PixelContext";

import "./App.scss";

const initialState = {
    pixelTable: defaultPixelTable
}

const App = () => {
    const [state, dispatch] = useReducer(PixelReducer, initialState)

    return <PixelContext.Provider value={{ state, dispatch }}>
        <div className='App'>
            <Header />
            <PixelGrid />
        </div>
    </PixelContext.Provider>
}

export default App;