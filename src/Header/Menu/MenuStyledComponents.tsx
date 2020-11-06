import styled from 'styled-components';

const Menu = styled.div`
    width: 80px; 
    height: 100%;
    border-right: 1px solid black;
    background: $menu;

    &:hover {
        background: $menuHover;
    }
`;

const MenuStyledComponents = {
    Menu
}

export default MenuStyledComponents;