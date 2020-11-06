import styled from 'styled-components';
import colors from '../StyleVariables/colors';
import size from "../StyleVariables/size";

const Header = styled.div`
    background: ${colors.grey};
    width: 100%;
    height: ${size.topBar};
    display: flex;
`;

const HeaderStyledComponents = {
    Header
}

export default HeaderStyledComponents;