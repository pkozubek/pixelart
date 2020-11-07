import styled from 'styled-components';
import colors from "../StyleVariables/colors";
import { sideBarWidth } from "../StyleVariables/size";

const SideBar = styled.div`
    height: 100%;
    width: ${sideBarWidth};
    background: ${colors.sidebar};
    color: ${colors.white}
`;

const ColorContainer = styled.div`
    border: 1px solid ${colors.white};
    width: 80%;
    margin-left: auto;
`

const ColorRectangle = styled.div`
    width: 30px;
    height: 30px;
    background: ${({ color }) => color}
`;

const PickedColor = styled.div`
    width: 60px;
    height: 60px;
    background: ${({ color }) => color}
`;

const StyledSideBar = {
    SideBar,
    ColorRectangle,
    ColorContainer,
    PickedColor
}

export default StyledSideBar;
