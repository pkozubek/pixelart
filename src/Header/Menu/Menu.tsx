import React from 'react';
import MenuStyledComponents from './MenuStyledComponents';

interface IMenuProps {
    name: string
}

const Menu = (props: IMenuProps) => {
    return <MenuStyledComponents.Menu>{props.name}</MenuStyledComponents.Menu>
}

export default Menu;