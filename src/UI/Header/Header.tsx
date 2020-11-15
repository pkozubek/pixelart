import React, { useState } from 'react';
import Menu from "./Menu/Menu";
import HeaderStyledComponents from './HeaderStyledComponents';
import Modal from '../Modal/Modal';

const Header = () => {
    const [newPixelArtModalVisible, setNewPixelArtModalVisible] = useState(false);

    const newPixelArtModalVisiblityHandler = () => setNewPixelArtModalVisible(!newPixelArtModalVisible);

    const menus = [
        {
            name: 'PixelArt', subItems: [
                { name: 'New PixelArt', onClick: newPixelArtModalVisiblityHandler },
            ]
        },
        {
            name: 'Configure'
        }

    ]

    return <HeaderStyledComponents.Header>
        {menus.map(menu => <Menu {...menu} />)}
        {<Modal visibilityHandler={newPixelArtModalVisiblityHandler} visible={newPixelArtModalVisible} content='New pixel Art' />}
    </HeaderStyledComponents.Header>
}

export default Header;