import styled from 'styled-components';
import colors from '../../StyleVariables/colors';
import { topBarHeight } from "../../StyleVariables/size";

const Header = styled.div`
    background: ${colors.grey};
    width: 100%;
    height: ${topBarHeight};
    display: flex;
`;

const HeaderStyledComponents = {
    Header
}

export default HeaderStyledComponents;