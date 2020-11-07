import React from 'react';
import Header from "../Header/Header";
import { PixelContextProvider } from "../context/PixelContext";
import StyledApp from "./StyledApp";
import SideBar from '../SideBar/SideBar';
import GlobalStyle from './GlobalStyle';
import PixelGrid from "../PixelGrid/PixelGrid";
import { ColorContextProvider } from '../context/ColorContext';


const App = () => {
    return <PixelContextProvider>
        <ColorContextProvider>
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
        </ColorContextProvider>
    </PixelContextProvider>
}

export default App;