import React, { useContext } from 'react';
import { PixelContext } from "../context/PixelContext";

import "./PixelGrid.scss";

const PixelGrid = () => {
    const { state } = useContext(PixelContext);

    return <div className='PixelGrid'>
        {state.pixelTable.map(pixel => <div className='pixelRow'><div className='pixel' /></div>)}
    </div>
}

export default PixelGrid;