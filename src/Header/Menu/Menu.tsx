import React from 'react';
import "./Menu.scss";

interface IMenuProps {
    name: string
}

const Menu = (props: IMenuProps) => {
    return <div className='Menu'>{props.name}</div>
}

export default Menu;