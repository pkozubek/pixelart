import React from 'react';
import Menu from "./Menu/Menu";

import "./Header.scss";

const Header = () => {
    const menus = [
        { name: 'test' },
        { name: 'test' },
        { name: 'test' },
        { name: 'test' }
    ]

    return <div className='Header'>
        {menus.map(menu => <Menu name={menu.name} />)}
    </div>
}

export default Header;