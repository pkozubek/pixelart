import React, { useReducer } from 'react';
import { defaultPixelTable } from '../consts';
import Header from "../Header/Header";
import PixelGrid from "../PixelGrid/PixelGrid";
import { PixelReducer, PixelContext } from "../context/PixelContext";
import StyledApp from "./StyledApp";
import SideBar from '../SideBar/SideBar';
import GlobalStyle from './GlobalStyle';

const initialState = {
    pixelTable: defaultPixelTable
}

const App = () => {
    const [state, dispatch] = useReducer(PixelReducer, initialState)

    return <PixelContext.Provider value={{ state, dispatch }}>
        <GlobalStyle />
        <StyledApp.App>
            <Header />
            <StyledApp.BodyContainer>
                <SideBar />
                <StyledApp.WorkingSpace>
                    <PixelGrid />
                </StyledApp.WorkingSpace>
            </StyledApp.BodyContainer>
        </StyledApp.App>
    </PixelContext.Provider>
}

export default App;