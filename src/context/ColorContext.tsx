import React, { createContext, useState, ReactChildren } from 'react';
import colors from "../StyleVariables/colors";

export const ColorContext = createContext(null);

interface IPixelContextProvider {
    children?: ReactChildren;
}

export const ColorContextProvider = (props: IPixelContextProvider) => {
    const [pickedColor, setPickedColors] = useState<[string, string]>([colors.grey, colors.white]);

    return <ColorContext.Provider value={{ pickedColor, setPickedColors }}>
        {props.children}
    </ColorContext.Provider>
}

export default ColorContext;