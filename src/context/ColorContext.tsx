import React, { createContext, useState, ReactChildren } from 'react';
import colors from "../StyleVariables/colors";

export const ColorContext = createContext(null);

interface IPixelContextProvider {
    children?: ReactChildren;
}

export const ColorContextProvider = (props: IPixelContextProvider) => {
    const [firstColor, setFirstColor] = useState(colors.grey);
    const [secondColor, setSecondColor] = useState(colors.white);

    return <ColorContext.Provider value={{ firstColor, secondColor }}>
        {props.children}
    </ColorContext.Provider>
}

export default ColorContext;