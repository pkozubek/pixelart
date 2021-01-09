import styled from "styled-components";
import colors from "../../StyleVariables/colors";

const SideBar = styled.div`
  height: 20%;
  width: 100%;
  background: ${colors.sidebar};
  color: ${colors.white};
  display: flex;
`;

const ColorContainer = styled.div`
  border: 1px solid ${colors.white};
  width: 10%;
  margin-left: auto;
  display: flex;
`;

const ColorRectangle = styled.div`
  width: 30px;
  height: 30px;
  background: ${({ color }) => color};
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
`;

const StyledSideBar = {
  SideBar,
  ColorRectangle,
  ColorContainer,
  ButtonsContainer,
};

export default StyledSideBar;
