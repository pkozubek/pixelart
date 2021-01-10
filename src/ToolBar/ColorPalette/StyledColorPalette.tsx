import styled from "styled-components";
import colors from "../../StyleVariables/colors";

const ColorRectangle = styled.div`
  width: 30px;
  height: 30px;
  margin: 2px;
  border: ${(props) =>
    props.isPicked ? "1px solid yellow" : "1px solid black"};
  background: ${({ color }) => color};
`;

const ColorContainer = styled.div`
  width: 300px;
  display: flex;
`;

const StyledColorPalette = {
  ColorRectangle,
  ColorContainer,
};

export default StyledColorPalette;
