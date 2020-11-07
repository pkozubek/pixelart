import styled from 'styled-components';

const PixelGrid = styled.div`
    display: grid;
    grid-template-rows: ${({ rows, pixelSize }) => `repeat(${rows}, ${pixelSize}px)}`};
    grid-template-columns: ${({ columns, pixelSize }) => `repeat(${columns}, ${pixelSize}px)}`};
`;

const Pixel = styled.div`
    width: ${({ pixelSize }) => `${pixelSize}px`};
    height: ${({ pixelSize }) => `${pixelSize}px`};
    border: 1px solid black;
    background: ${({ color }) => color};
`;

export const StyledPixelGrid = {
    Pixel,
    PixelGrid
}

