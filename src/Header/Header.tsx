import React from 'react';
import Menu from "./Menu/Menu";
import HeaderStyledComponents from './HeaderStyledComponents';

const Header = () => {
    const menus = [
        { name: 'test' },
        { name: 'test' },
        { name: 'test' },
        { name: 'test' }
    ]

    return <HeaderStyledComponents.Header>
        {menus.map(menu => <Menu name={menu.name} />)}
    </HeaderStyledComponents.Header>
}

export default Header;