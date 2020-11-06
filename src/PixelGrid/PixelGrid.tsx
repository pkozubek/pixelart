import React, { useContext } from 'react';
import { PixelContext } from "../context/PixelContext";
import { PixelGridComponents } from "./PixelGridComponents";

const PixelGrid = () => {
    const { state } = useContext(PixelContext);

    return <div className='PixelGrid'>
        {state.pixelTable.map(pixel => <PixelGridComponents.PixelGrid>
            <PixelGridComponents.Pixel />
        </PixelGridComponents.PixelGrid>)}
    </div>
}


export default PixelGrid;