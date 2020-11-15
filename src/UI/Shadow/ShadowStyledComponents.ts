import styled from 'styled-components';
import colors from "../../StyleVariables/colors";

const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: ${colors.shadow}
`;

const ShadowComponents = {
    Shadow
};

export default ShadowComponents;