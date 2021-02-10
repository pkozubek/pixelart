import styled from 'styled-components';

const shadowColor = "rgba(66, 66, 66, 0.8)";

const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: ${shadowColor}
`;

const ShadowComponents = {
    Shadow
};

export default ShadowComponents;