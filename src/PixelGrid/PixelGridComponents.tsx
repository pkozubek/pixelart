import styled from 'styled-components';

const PixelGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: calc(100% - 36px);
`;

const Pixel = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid black;
    background: red;
`;

export const PixelGridComponents = {
    Pixel,
    PixelGrid
}

