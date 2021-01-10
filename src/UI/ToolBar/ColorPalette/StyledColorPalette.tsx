import styled from "styled-components";
import colors from "../../../StyleVariables/colors";

const ColorRectangle = styled.div`
  width: 30px;
  height: 30px;
  border: ${(props) => (props.isPicked ? "1px solid yellow" : "none")};
  background: ${({ color }) => color};
`;

const ColorContainer = styled.div`
  border: 1px solid ${colors.white};
  width: 10%;
  margin-left: auto;
  display: flex;
`;

const StyledColorPalette = {
  ColorRectangle,
  ColorContainer,
};

export default StyledColorPalette;
