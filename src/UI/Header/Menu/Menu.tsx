import React, { useState } from 'react';
import MenuStyledComponents from './MenuStyledComponents';

interface IMenuItem {
    name: string,
    onClick?: () => void,
}

interface IMenuProps {
    name: string,
    onClick?: () => void;
    subItems?: IMenuItem[]
}

const Menu = (props: IMenuProps) => {
    let menu = null;
    const [visible, setVisible] = useState(false);
    const visibilityHandler = () => setVisible(!visible);

    if (props.subItems) {
        menu = <MenuStyledComponents.MenuWithSubItems onClick={visibilityHandler}>
            {props.name}
            {visible && <MenuStyledComponents.SubItemsDropdown>
                {props.subItems.map((subItem) => <MenuStyledComponents.SubItem onClick={subItem.onClick}>{subItem.name}</MenuStyledComponents.SubItem>)}
            </MenuStyledComponents.SubItemsDropdown>}
        </MenuStyledComponents.MenuWithSubItems>
    } else {
        menu = <MenuStyledComponents.Menu>
            {props.name}
        </MenuStyledComponents.Menu>
    }

    return menu;
}

export default Menu;