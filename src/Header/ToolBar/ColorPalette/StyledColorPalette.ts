import styled from "styled-components";

const ColorRectangle = styled.div`
  width: 20px;
  height: 20px;
  margin: 3px;
  border: ${(props) =>
    props.isPicked ? "2px solid yellow" : "2px solid black"};
  background: ${({ color }) => color};
`;

const ColorContainer = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
`;

const StyledColorPalette = {
  ColorRectangle,
  ColorContainer,
};

export default StyledColorPalette;
