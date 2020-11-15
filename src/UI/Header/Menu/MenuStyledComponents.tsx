import styled from 'styled-components';
import colors from "../../../StyleVariables/colors"

const Menu = styled.div`
    width: 80px; 
    height: 100%;
    border-right: 1px solid ${colors.grey};
    background: ${colors.menu};

    &:hover {
        background: ${colors.menuHover};
    }
`;

const MenuWithSubItems = styled.div`
    width: 100px;
    height: 100%;
    border-right: 1px solid black;
    background: ${colors.menu};
`;

const SubItem = styled.div`
    width: 100px;
    height: 40px;
`;

const MenuStyledComponents = {
    Menu,
    MenuWithSubItems,
    SubItem
}

export default MenuStyledComponents;