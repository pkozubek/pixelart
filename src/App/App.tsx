import React from 'react';
import Header from "../UI/Header/Header";
import { PixelContextProvider } from "../context/PixelContext";
import StyledApp from "./StyledApp";
import SideBar from '../UI/SideBar/SideBar';
import GlobalStyle from './GlobalStyle';
import PixelGrid from "../PixelGrid/PixelGrid";
import { ColorContextProvider } from '../context/ColorContext';


const App = () => {
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

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